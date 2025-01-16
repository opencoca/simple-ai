// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Index: Record<string, any> = {
	"jsx-renderer": {
		name: "jsx-renderer",
		description: "A component that renders JSX strings with access to tailwind, shadcn components and lucide icons.",
		type: "registry:ui",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/ui/jsx-renderer.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/jsx-renderer.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input": {
		name: "chat-input",
		description: "",
		type: "registry:ui",
		registryDependencies: ["textarea"],
		files: [{
			path: "src/registry/ui/chat-input.tsx",
			type: "registry:ui",
			target: ""
		},{
			path: "src/registry/hooks/use-textarea-resize.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-input.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area": {
		name: "chat-message-area",
		description: "",
		type: "registry:ui",
		registryDependencies: ["scroll-area","button"],
		files: [{
			path: "src/registry/ui/chat-message-area.tsx",
			type: "registry:ui",
			target: ""
		},{
			path: "src/registry/hooks/use-scroll-to-bottom.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-message-area.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message": {
		name: "chat-message",
		description: "",
		type: "registry:ui",
		registryDependencies: ["https://simple-ai.alwurts.com/registry/markdown-content.json"],
		files: [{
			path: "src/registry/ui/chat-message.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-message.tsx")),
		source: "",
		meta: undefined,
    },	"markdown-content": {
		name: "markdown-content",
		description: "A markdown content component.",
		type: "registry:ui",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/ui/markdown-content.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/markdown-content.tsx")),
		source: "",
		meta: undefined,
    },	"submit-button": {
		name: "submit-button",
		description: "",
		type: "registry:ui",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/ui/submit-button.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/submit-button.tsx")),
		source: "",
		meta: undefined,
    },	"chat-demo": {
		name: "chat-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input-demo": {
		name: "chat-input-demo",
		description: "",
		type: "registry:example",
		registryDependencies: ["https://simple-ai.alwurts.com/registry/chat-input.json"],
		files: [{
			path: "src/registry/examples/chat-input-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-input-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input-unstyled": {
		name: "chat-input-unstyled",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-input-unstyled.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-input-unstyled.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input-unstyled-initial-rows": {
		name: "chat-input-unstyled-initial-rows",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-input-unstyled-initial-rows.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-input-unstyled-initial-rows.tsx")),
		source: "",
		meta: undefined,
    },	"markdown-content-demo": {
		name: "markdown-content-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/markdown-content-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/markdown-content-demo.tsx")),
		source: "",
		meta: undefined,
    },	"markdown-streaming-demo": {
		name: "markdown-streaming-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/markdown-streaming-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/markdown-streaming-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo": {
		name: "chat-message-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-default": {
		name: "chat-message-demo-default",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-default.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-default.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-bubble": {
		name: "chat-message-demo-bubble",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-bubble.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-bubble.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-full": {
		name: "chat-message-demo-full",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-full.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-full.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-without-avatar": {
		name: "chat-message-demo-without-avatar",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-without-avatar.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-without-avatar.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-avatar-image": {
		name: "chat-message-demo-avatar-image",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-avatar-image.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-avatar-image.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-markdown-content": {
		name: "chat-message-demo-markdown-content",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-markdown-content.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-markdown-content.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area-demo": {
		name: "chat-message-area-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-area-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-area-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area-demo-alignment": {
		name: "chat-message-area-demo-alignment",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-area-demo-alignment.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-area-demo-alignment.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area-demo-streaming": {
		name: "chat-message-area-demo-streaming",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-area-demo-streaming.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-area-demo-streaming.tsx")),
		source: "",
		meta: undefined,
    },	"use-textarea-resize": {
		name: "use-textarea-resize",
		description: "",
		type: "registry:hook",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/hooks/use-textarea-resize.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/hooks/use-textarea-resize.ts")),
		source: "",
		meta: undefined,
    },	"use-scroll-to-bottom": {
		name: "use-scroll-to-bottom",
		description: "",
		type: "registry:hook",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/hooks/use-scroll-to-bottom.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/hooks/use-scroll-to-bottom.ts")),
		source: "",
		meta: undefined,
    },	"chat-01": {
		name: "chat-01",
		description: "A simple chat page.",
		type: "registry:block",
		registryDependencies: ["card","breadcrumb","separator","sidebar","tooltip","button","avatar","dropdown-menu","https://simple-ai.alwurts.com/registry/chat-input.json","https://simple-ai.alwurts.com/registry/chat-message-area.json","https://simple-ai.alwurts.com/registry/chat-message.json"],
		files: [{
			path: "src/registry/blocks/chat-01/page.tsx",
			type: "registry:page",
			target: "app/chat/page.tsx"
		},{
			path: "src/registry/blocks/chat-01/route.ts",
			type: "registry:page",
			target: "app/api/ai/chat/route.ts"
		},{
			path: "src/registry/blocks/chat-01/components/chat.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/chat-01/components/sidebar-app.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/chat-01/components/nav-user.tsx",
			type: "registry:component",
			target: ""
		}],
		categories: ["chat"],
		component: React.lazy(() => import("@/registry/blocks/chat-01/page.tsx")),
		source: "src/__registry__/blocks/chat-01/page.tsx",
		meta: undefined,
    },	"chat-02": {
		name: "chat-02",
		description: "A chat in a sidebar.",
		type: "registry:block",
		registryDependencies: ["sidebar","breadcrumb","https://simple-ai.alwurts.com/registry/chat-input.json","https://simple-ai.alwurts.com/registry/chat-message-area.json","https://simple-ai.alwurts.com/registry/chat-message.json"],
		files: [{
			path: "src/registry/blocks/chat-02/page.tsx",
			type: "registry:page",
			target: "app/chat/page.tsx"
		},{
			path: "src/registry/blocks/chat-02/route.ts",
			type: "registry:page",
			target: "app/api/ai/chat/route.ts"
		},{
			path: "src/registry/blocks/chat-02/components/app-sidebar.tsx",
			type: "registry:component",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/blocks/chat-02/page.tsx")),
		source: "src/__registry__/blocks/chat-02/page.tsx",
		meta: undefined,
    },	"chat-03": {
		name: "chat-03",
		description: "A chat in a popover.",
		type: "registry:block",
		registryDependencies: ["popover","button","https://simple-ai.alwurts.com/registry/chat-input.json","https://simple-ai.alwurts.com/registry/chat-message-area.json","https://simple-ai.alwurts.com/registry/chat-message.json"],
		files: [{
			path: "src/registry/blocks/chat-03/page.tsx",
			type: "registry:page",
			target: "app/chat/page.tsx"
		},{
			path: "src/registry/blocks/chat-03/route.ts",
			type: "registry:page",
			target: "app/api/ai/chat/route.ts"
		},{
			path: "src/registry/blocks/chat-03/components/chat.tsx",
			type: "registry:component",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/blocks/chat-03/page.tsx")),
		source: "src/__registry__/blocks/chat-03/page.tsx",
		meta: undefined,
    },	"chat-04": {
		name: "chat-04",
		description: "A chat with generative UI capabilities.",
		type: "registry:block",
		registryDependencies: ["resizable","breadcrumb","button","https://simple-ai.alwurts.com/registry/chat-input.json","https://simple-ai.alwurts.com/registry/chat-message-area.json","https://simple-ai.alwurts.com/registry/chat-message.json"],
		files: [{
			path: "src/registry/blocks/chat-04/page.tsx",
			type: "registry:page",
			target: "app/chat/page.tsx"
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/blocks/chat-04/page.tsx")),
		source: "src/__registry__/blocks/chat-04/page.tsx",
		meta: undefined,
    },
}
