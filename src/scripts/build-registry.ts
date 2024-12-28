import { type Registry, registrySchema } from "../registry/schema";
import { registry } from "../registry";
import path from "node:path";
import fs from "node:fs/promises";
import { rimraf } from "rimraf";

/* const REGISTRY_BASE_PATH = "src/registry";
const PUBLIC_FOLDER_BASE_PATH = "public/registry";
const COMPONENT_FOLDER_PATH = "components";

type File = z.infer<typeof registryItemFileSchema>;
const FolderToComponentTypeMap = {
	block: "registry:block",
	component: "registry:component",
	hooks: "registry:hook",
	ui: "registry:ui",
}; */

/* async function writeFileRecursive(filePath: string, data: string) {
	const dir = path.dirname(filePath); // Extract the directory path

	try {
		// Ensure the directory exists, recursively creating directories as needed
		await fs.mkdir(dir, { recursive: true });

		// Write the file
		await fs.writeFile(filePath, data, "utf-8");
		console.log(`File written to ${filePath}`);
	} catch (error) {
		console.error("Error writing file");
		console.error(error);
	}
} */

/* const getComponentFiles = async (files: File[]) => {
	const filesArrayPromises = (files ?? []).map(async (file) => {
		if (typeof file === "string") {
			const filePath = `${REGISTRY_BASE_PATH}/${file}`;
			const fileContent = await fs.readFile(filePath, "utf-8");
			return {
				type: FolderToComponentTypeMap[
					file.split("/")[0] as keyof typeof FolderToComponentTypeMap
				],
				content: fileContent,
				path: file,
				target: `${COMPONENT_FOLDER_PATH}/${file}`,
			};
		}
	});
	const filesArray = await Promise.all(filesArrayPromises);

	return filesArray;
}; */

/* const main = async () => {
	// make a json file and put it in public folder
	for (let i = 0; i < registryComponents.length; i++) {
		const component = registryComponents[i];
		const files = component.files;
		if (!files) {
			throw new Error("No files found for component");
		}

		const filesArray = await getComponentFiles(files);

		const json = JSON.stringify(
			{
				...component,
				files: filesArray,
			},
			null,
			2,
		);
		const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
		await writeFileRecursive(jsonPath, json);
		console.log(json);
	}
}; */

const REGISTRY_BASE_PATH = "src/registry";
const REGISTRY_PUBLIC_PATH = path.join(process.cwd(), "public/registry");
const REGISTRY_GENERATED_PATH = path.join(process.cwd(), "src/__registry__");
// ----------------------------------------------------------------------------
// Build __registry__/index.tsx.
// ----------------------------------------------------------------------------
async function buildRegistry(registry: Registry) {
	let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
`;

	for (const item of registry) {
		const resolveFiles = item.files?.map(
			(file) => `${REGISTRY_BASE_PATH}/${file.path}`,
		);
		if (!resolveFiles) {
			continue;
		}

		const type = item.type.split(":")[1];

		// biome-ignore lint/style/useConst: <explanation>
		let sourceFilename = "";

		let componentPath = `@/registry/${type}/${item.name}`;

		if (item.files) {
			if (item.files.length) {
				componentPath = `@/registry/${item.files[0].path}`;
			}
		}

		index += `	"${item.name}": {
		name: "${item.name}",
		description: "${item.description ?? ""}",
		type: "${item.type}",
		registryDependencies: ${JSON.stringify(item.registryDependencies)},
		files: [${item.files?.map((file) => {
			const filePath = `${REGISTRY_BASE_PATH}/${file.path}`;
			//const resolvedFilePath = path.resolve(filePath);
			return `{
			path: "${filePath}",
			type: "${file.type}",
			target: "${file.target ?? ""}"
		}`;
		})}],
		categories: ${JSON.stringify(item.categories)},
		component: React.lazy(() => import("${componentPath}")),
		source: "${sourceFilename}",
		meta: ${JSON.stringify(item.meta)},
    },`;
	}

	index += `
}
`;
	// ----------------------------------------------------------------------------
	// Build registry/index.json.
	// ----------------------------------------------------------------------------
	const uiRegistryItems = registry.filter((item) =>
		["registry:ui"].includes(item.type),
	);

	const registryJson = JSON.stringify(uiRegistryItems, null, 2);
	console.log("registryJson", registryJson);
	rimraf.sync(path.join(REGISTRY_PUBLIC_PATH, "index.json"));
	await fs.writeFile(
		path.join(REGISTRY_PUBLIC_PATH, "index.json"),
		registryJson,
		"utf8",
	);

	rimraf.sync(path.join(REGISTRY_GENERATED_PATH, "index.tsx"));
	await fs.writeFile(
		path.join(REGISTRY_GENERATED_PATH, "index.tsx"),
		index,
		"utf8",
	);
}

const main = async () => {
	try {
		console.log("💽 Building registry...");
		const result = registrySchema.safeParse(registry);

		if (!result.success) {
			console.error(result.error);
			process.exit(1);
		}
		//console.log("result.data", result.data);

		await buildRegistry(result.data);

		console.log("✅ Done!");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

main();
