import type { Registry } from "@/registry/schema";

export const blocks: Registry = [
	{
		name: "chat-01",
		description: "A simple chat page.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai"],
		registryDependencies: [
			"card",
			"breadcrumb",
			"separator",
			"sidebar",
			"tooltip",
			"button",
			"avatar",
			"dropdown-menu",
			"https://simple-ai.dev/r/chat-input.json",
			"https://simple-ai.dev/r/chat-message-area.json",
			"https://simple-ai.dev/r/chat-message.json",
		],
		files: [
			{
				path: "blocks/chat-01/page.tsx",
				target: "app/chat/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/chat-01/route.ts",
				target: "app/api/ai/chat/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/chat-01/components/chat.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/chat-01/components/sidebar-app.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/chat-01/components/nav-user.tsx",
				type: "registry:component",
			},
		],
		categories: ["chat"],
	},
	{
		name: "chat-02",
		description: "A chat in a sidebar.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai"],
		registryDependencies: [
			"sidebar",
			"breadcrumb",
			"https://simple-ai.dev/r/chat-input.json",
			"https://simple-ai.dev/r/chat-message-area.json",
			"https://simple-ai.dev/r/chat-message.json",
		],
		files: [
			{
				path: "blocks/chat-02/page.tsx",
				target: "app/chat/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/chat-02/route.ts",
				target: "app/api/ai/chat/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/chat-02/components/app-sidebar.tsx",
				type: "registry:component",
			},
		],
		categories: ["chat"],
	},
	{
		name: "chat-03",
		description: "A chat in a popover.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai"],
		registryDependencies: [
			"popover",
			"button",
			"https://simple-ai.dev/r/chat-input.json",
			"https://simple-ai.dev/r/chat-message-area.json",
			"https://simple-ai.dev/r/chat-message.json",
		],
		files: [
			{
				path: "blocks/chat-03/page.tsx",
				target: "app/chat/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/chat-03/route.ts",
				target: "app/api/ai/chat/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/chat-03/components/chat.tsx",
				type: "registry:component",
			},
		],
		categories: ["chat"],
	},
	{
		name: "app-01",
		description: "A app with generative UI capabilities.",
		type: "registry:block",
		dependencies: [
			"ai",
			"@ai-sdk/openai",
			"@uiw/react-codemirror",
			"@codemirror/lang-javascript",
			"zustand",
		],
		registryDependencies: [
			"avatar",
			"input",
			"label",
			"tabs",
			"resizable",
			"breadcrumb",
			"button",
			"toggle-group",
			"switch",
			"separator",
			"card",
			"badge",
			"dialog",
			"slider",
			"https://simple-ai.dev/r/chat-input.json",
			"https://simple-ai.dev/r/chat-message-area.json",
			"https://simple-ai.dev/r/chat-message.json",
			"https://simple-ai.dev/r/jsx-renderer.json",
			"https://simple-ai.dev/r/jsx-utils.json",
		],
		files: [
			{
				path: "blocks/app-01/page.tsx",
				target: "app/generative-ui/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/app-01/canvas/page.tsx",
				target: "app/canvas/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/app-01/route.ts",
				target: "app/api/ai/generate/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/app-01/hooks/generation-store.ts",
				type: "registry:hook",
			},
			{
				path: "blocks/app-01/components/versions.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-01/components/editor-layout.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-01/components/editor-toolbar.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-01/components/code-editor.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-01/components/preview.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-01/components/chat-dialog.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-01/components/copy-button.tsx",
				type: "registry:component",
			},
		],
		categories: ["app"],
	},
	{
		name: "app-02",
		description: "A persona generator app with structured outputs.",
		type: "registry:block",
		registryDependencies: [
			"dialog",
			"button",
			"input",
			"textarea",
			"label",
			"scroll-area",
			"form",
			"skeleton",
			"card",
			"avatar",
		],
		dependencies: ["ai", "@ai-sdk/openai", "zod"],
		files: [
			{
				path: "blocks/app-02/page.tsx",
				target: "app/persona/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/app-02/route.ts",
				target: "app/api/ai/persona/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/app-02/components/persona-display.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-02/types/persona.ts",
				target: "app/types/persona.ts",
				type: "registry:lib",
			},
			{
				path: "blocks/app-02/lib/example-businesses.ts",
				type: "registry:lib",
			},
		],
		categories: ["app"],
	},
	{
		name: "app-03",
		description: "An X profile bio generator app.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai", "zod", "next-themes"],
		registryDependencies: [
			"button",
			"dialog",
			"input",
			"textarea",
			"form",
			"label",
			"select",
			"skeleton",
			"avatar",
		],
		files: [
			{
				path: "blocks/app-03/page.tsx",
				target: "app/x-profile/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/app-03/layout.tsx",
				target: "app/x-profile/layout.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/app-03/route.ts",
				target: "app/api/ai/x-profile/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/app-03/components/profile-generate-dialog.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-03/components/x-preview.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-03/components/toolbar.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-03/components/theme-toggle.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/app-03/types/x.ts",
				target: "app/types/x.ts",
				type: "registry:lib",
			},
			{
				path: "blocks/app-03/lib/profile-examples.ts",
				type: "registry:lib",
			},
		],
		categories: ["app"],
	},
];
