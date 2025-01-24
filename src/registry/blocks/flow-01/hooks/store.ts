import { addEdge, applyEdgeChanges, applyNodeChanges } from "@xyflow/react";
import type { Connection, EdgeChange, NodeChange } from "@xyflow/react";
import { nanoid } from "nanoid";
import { createWithEqualityFn } from "zustand/traditional";
import {
	isNodeWithDynamicHandles,
	isNodeOfType,
	hasTargets,
	type DynamicHandle,
	type FlowEdge,
	type FlowNode,
	type FlowNodeDataTypeMap,
	type GenerateTextNode,
	type TextInputNode,
	type VisualizeTextNode,
	type PromptCrafterNode,
	hasSources,
} from "@/registry/blocks/flow-01/types/flow";
import type { WorkflowDefinition } from "@/registry/blocks/flow-01/types/workflow";
import { prepareWorkflow } from "@/registry/blocks/flow-01/lib/workflow";
import { PROMPT_CRAFTER_WORKFLOW } from "@/registry/blocks/flow-01/lib/examples";
import { generateText } from "../lib/ai";

export interface StoreState {
	nodes: FlowNode[];
	edges: FlowEdge[];
	onNodesChange: (changes: NodeChange<FlowNode>[]) => void;
	onEdgesChange: (changes: EdgeChange<FlowEdge>[]) => void;
	onConnect: (connection: Connection) => void;
	updateNode: <T extends FlowNode["type"]>(
		id: string,
		nodeType: T,
		data: Partial<FlowNodeDataTypeMap[T]>,
	) => void;
	deleteNode: (id: string) => void;
	createNode: (
		nodeType: FlowNode["type"],
		position: { x: number; y: number },
	) => FlowNode;
	addDynamicHandle: <T extends FlowNode["type"]>(
		nodeId: string,
		nodeType: T,
		handleCategory: string, // Change to more specific type depending on node type
		handle: Omit<DynamicHandle, "id">,
	) => string;
	removeDynamicHandle: <T extends FlowNode["type"]>(
		nodeId: string,
		nodeType: T,
		handleCategory: string, // Change to more specific type depending on node type
		handleId: string,
	) => void;
	// execution
	prepareWorkflow: () => WorkflowDefinition;
	startExecution: () => Promise<void>;
	getNodeTargetsData: (nodeId: string) => Record<string, string> | undefined;
	processNode: (
		nodeId: string,
		targetsData: Record<string, string> | undefined,
	) => Promise<Record<string, string> | undefined>;
}

const useStore = createWithEqualityFn<StoreState>((set, get) => ({
	...PROMPT_CRAFTER_WORKFLOW,
	onNodesChange: (changes) => {
		set({
			nodes: applyNodeChanges<FlowNode>(changes, get().nodes),
		});
	},
	onEdgesChange: (changes) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		});
	},
	onConnect: (connection) => {
		const newEdge = addEdge(connection, get().edges);
		const sourceNode = get().nodes.find((n) => n.id === connection.source);
		if (!sourceNode) {
			throw new Error(`Source node with id ${connection.source} not found`);
		}

		if (!connection.sourceHandle) {
			throw new Error("Source handle not found");
		}

		const sourceExecutionState = sourceNode.data.executionState;

		if (sourceExecutionState?.sources) {
			const sourceHandleData =
				sourceExecutionState.sources[connection.sourceHandle];
			const nodes = get().nodes.map((node) => {
				if (node.id === connection.target && connection.targetHandle) {
					return {
						...node,
						data: {
							...node.data,
							executionState: node.data.executionState
								? {
										...node.data.executionState,
										targets: {
											...node.data.executionState.targets,
											[connection.targetHandle]: sourceHandleData,
										},
									}
								: {
										status: "success",
										timestamp: new Date().toISOString(),
										targets: {
											[connection.targetHandle]: sourceHandleData,
										},
									},
						},
					};
				}
				return node;
			});

			set({
				nodes: nodes as FlowNode[],
			});
		}
		set({
			edges: newEdge,
		});
	},
	updateNode(id, type, data) {
		set((state) => ({
			nodes: state.nodes.map((node) => {
				if (node.id === id && isNodeOfType(node, type)) {
					return {
						...node,
						data: {
							...node.data,
							...data,
						},
					};
				}
				return node;
			}),
		}));
	},
	deleteNode(id) {
		set({
			nodes: get().nodes.filter((node) => node.id !== id),
			edges: get().edges.filter(
				(edge) => edge.source !== id && edge.target !== id,
			),
		});
	},
	addDynamicHandle(nodeId, type, handleCategory, handle) {
		const newId = nanoid();
		set({
			nodes: get().nodes.map((node) => {
				if (
					node.id === nodeId &&
					isNodeWithDynamicHandles(node) &&
					isNodeOfType(node, type)
				) {
					return {
						...node,
						data: {
							...node.data,
							config: {
								...node.data.config,
								dynamicHandles: {
									...node.data.dynamicHandles,
									[handleCategory]: [
										...node.data.dynamicHandles[
											handleCategory as keyof typeof node.data.dynamicHandles // Change to more specific type
										],
										{
											...handle,
											id: newId,
										},
									],
								},
							},
						},
					};
				}

				return node;
			}),
		});
		return newId;
	},
	removeDynamicHandle(nodeId, type, handleCategory, handleId) {
		set({
			nodes: get().nodes.map((node) => {
				if (
					node.id === nodeId &&
					isNodeWithDynamicHandles(node) &&
					isNodeOfType(node, type)
				) {
					const dynamicHandles = node.data.dynamicHandles;
					const handles = dynamicHandles[
						handleCategory as keyof typeof dynamicHandles
					] as DynamicHandle[]; // Remove with type guard or more specific type
					const newHandles = handles.filter((handle) => handle.id !== handleId);

					return {
						...node,
						data: {
							...node.data,
							config: {
								...node.data.config,
								dynamicHandles: {
									...node.data.dynamicHandles,
									[handleCategory]: newHandles,
								},
							},
						},
					};
				}
				return node;
			}),
			edges: get().edges.filter((edge) => {
				if (edge.source === nodeId && edge.sourceHandle === handleId) {
					return false;
				}
				if (edge.target === nodeId && edge.targetHandle === handleId) {
					return false;
				}
				return true;
			}),
		});
	},
	createNode(nodeType, position) {
		switch (nodeType) {
			case "generate-text": {
				const newNode: GenerateTextNode = {
					id: nanoid(),
					type: nodeType,
					position,
					data: {
						config: {
							model: "llama-3.1-8b-instant",
						},
						dynamicHandles: {
							tools: [],
						},
					},
				};
				set((state) => ({
					nodes: [...state.nodes, newNode],
				}));
				return newNode;
			}
			case "prompt-crafter": {
				const newNode: PromptCrafterNode = {
					id: nanoid(),
					type: nodeType,
					position,
					data: {
						config: {
							template: "",
						},
						dynamicHandles: {
							"template-tags": [],
						},
					},
				};
				set((state) => ({
					nodes: [...state.nodes, newNode],
				}));
				return newNode;
			}
			case "visualize-text": {
				const newNode: VisualizeTextNode = {
					id: nanoid(),
					type: nodeType,
					position,
					data: {},
				};
				set((state) => ({
					nodes: [...state.nodes, newNode],
				}));
				return newNode;
			}
			case "text-input": {
				const newNode: TextInputNode = {
					id: nanoid(),
					type: nodeType,
					position,
					data: {
						config: {
							value: "",
						},
					},
				};
				set((state) => ({
					nodes: [...state.nodes, newNode],
				}));
				return newNode;
			}
			default:
				throw new Error(`Unknown node type: ${nodeType}`);
		}
	},
	prepareWorkflow() {
		const { nodes, edges } = get();
		const workflow = prepareWorkflow(nodes, edges);
		return {
			nodes: nodes,
			edges: edges,
			id: nanoid(),
			...workflow,
		};
	},
	// Runtime

	getNodeTargetsData: (nodeId) => {
		const node = get().nodes.find((n) => n.id === nodeId);
		if (!node) {
			throw new Error(`Node with id ${nodeId} not found`);
		}
		if (!hasTargets(node)) {
			return undefined;
		}
		const edgesConnectedToNode = get().edges.filter(
			(edge) => edge.target === nodeId,
		);
		const targetsData: Record<string, string> = {};
		for (const edge of edgesConnectedToNode) {
			const sourceNode = get().nodes.find((n) => n.id === edge.source);
			if (!sourceNode) {
				throw new Error(`Source node with id ${edge.source} not found`);
			}
			const sourceNodeExecutionState = sourceNode.data.executionState;
			if (!sourceNodeExecutionState?.sources) {
				throw new Error(
					`Execution state not found for source node with id ${edge.source}`,
				);
			}
			const sourceNodeResult =
				sourceNodeExecutionState.sources[edge.sourceHandle];
			targetsData[edge.targetHandle] = sourceNodeResult;
		}
		return targetsData;
	},
	processNode: async (nodeId, targetsData) => {
		const node = get().nodes.find((n) => n.id === nodeId);
		if (!node) {
			throw new Error(`Node with id ${nodeId} not found`);
		}
		if (!hasSources(node)) {
			return undefined;
		}
		switch (node.type) {
			case "text-input":
				return {
					result: node.data.config.value,
				};
			case "prompt-crafter": {
				if (!targetsData) {
					throw new Error("Targets data not found");
				}
				let parsedTemplate = node.data.config.template;
				for (const [targetId, targetValue] of Object.entries(targetsData)) {
					const tag = node.data.dynamicHandles["template-tags"].find(
						(handle) => handle.id === targetId,
					);
					if (!tag) {
						throw new Error(`Tag with id ${targetId} not found`);
					}
					parsedTemplate = parsedTemplate.replaceAll(
						`{{${tag.name}}}`,
						targetValue,
					);
				}
				return {
					result: parsedTemplate,
				};
			}
			case "generate-text": {
				const system = targetsData?.system;
				const prompt = targetsData?.prompt;
				if (!prompt) {
					throw new Error("Prompt not found");
				}
				const result = await generateText({
					tools: node.data.dynamicHandles.tools,
					model: node.data.config.model,
					system,
					prompt,
				});
				const parsedResult: Record<string, string> = {
					result: result.text,
				};
				if (result.toolResults) {
					for (const toolResult of result.toolResults) {
						parsedResult[toolResult.id] = toolResult.result;
					}
				}

				return parsedResult;
			}
			default:
				return undefined;
		}
	},
	async startExecution() {
		const workflow = get().prepareWorkflow();

		if (workflow.errors.length > 0) {
			throw new Error(workflow.errors.map((error) => error.message).join("\n"));
		}

		// Reset execution state for all nodes
		set((state) => ({
			nodes: state.nodes.map((node) => ({
				...node,
				data: {
					...node.data,
					executionState: undefined,
				},
			})) as FlowNode[],
		}));

		// Keep track of completed nodes
		const completedNodes = new Set<string>();
		// Keep track of currently processing nodes
		const processingNodes = new Set<string>();

		// Helper function to check if a node's dependencies are completed
		const canProcessNode = (nodeId: string) => {
			const nodeDependencies = workflow.dependencies[nodeId] || [];
			return nodeDependencies.every((dep) => completedNodes.has(dep.node));
		};

		// Helper function to process a single node
		const processNode = async (nodeId: string) => {
			const node = workflow.nodes.find((n) => n.id === nodeId);
			if (!node) {
				throw new Error(`Node with id ${nodeId} not found in workflow`);
			}

			try {
				const targetsData = get().getNodeTargetsData(nodeId);

				get().updateNode(nodeId, node.type, {
					executionState: {
						timestamp: new Date().toISOString(),
						status: "processing",
						targets: targetsData,
					},
				});

				const result = await get().processNode(nodeId, targetsData);

				get().updateNode(nodeId, node.type, {
					executionState: {
						timestamp: new Date().toISOString(),
						targets: targetsData,
						sources: result,
						status: "success",
					},
				});

				completedNodes.add(nodeId);
				processingNodes.delete(nodeId);
			} catch (error) {
				get().updateNode(nodeId, node.type, {
					executionState: {
						timestamp: new Date().toISOString(),
						status: "error",
						error: error instanceof Error ? error.message : "Unknown error",
					},
				});
				console.error(error);
				processingNodes.delete(nodeId);
				completedNodes.add(nodeId);
			}
		};

		// Process nodes in parallel when possible
		while (completedNodes.size < workflow.nodes.length) {
			const availableNodes = workflow.executionOrder.filter(
				(nodeId) =>
					!completedNodes.has(nodeId) &&
					!processingNodes.has(nodeId) &&
					canProcessNode(nodeId),
			);

			if (availableNodes.length === 0) {
				// If no nodes are available and we're still processing some, wait
				if (processingNodes.size > 0) {
					await new Promise((resolve) => setTimeout(resolve, 100));
					continue;
				}
				// If no nodes are available and none are processing, we have a problem
				throw new Error("Unable to complete workflow execution");
			}

			// Start processing all available nodes in parallel
			const processingPromises = availableNodes.map((nodeId) => {
				processingNodes.add(nodeId);
				return processNode(nodeId);
			});

			// Wait for at least one node to complete before checking for more nodes
			await Promise.race(processingPromises);
		}
	},
}));

export { useStore };
