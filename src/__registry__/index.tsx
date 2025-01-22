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
		registryDependencies: ["https://simple-ai.dev/r/jsx-utils.json"],
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
		registryDependencies: ["https://simple-ai.dev/r/markdown-content.json"],
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
		registryDependencies: ["https://simple-ai.dev/r/chat-input.json"],
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
    },	"jsx-renderer-demo": {
		name: "jsx-renderer-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/jsx-renderer-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/jsx-renderer-demo.tsx")),
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
		registryDependencies: ["card","breadcrumb","separator","sidebar","tooltip","button","avatar","dropdown-menu","https://simple-ai.dev/r/chat-input.json","https://simple-ai.dev/r/chat-message-area.json","https://simple-ai.dev/r/chat-message.json"],
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
		registryDependencies: ["sidebar","breadcrumb","https://simple-ai.dev/r/chat-input.json","https://simple-ai.dev/r/chat-message-area.json","https://simple-ai.dev/r/chat-message.json"],
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
		categories: ["chat"],
		component: React.lazy(() => import("@/registry/blocks/chat-02/page.tsx")),
		source: "src/__registry__/blocks/chat-02/page.tsx",
		meta: undefined,
    },	"chat-03": {
		name: "chat-03",
		description: "A chat in a popover.",
		type: "registry:block",
		registryDependencies: ["popover","button","https://simple-ai.dev/r/chat-input.json","https://simple-ai.dev/r/chat-message-area.json","https://simple-ai.dev/r/chat-message.json"],
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
		categories: ["chat"],
		component: React.lazy(() => import("@/registry/blocks/chat-03/page.tsx")),
		source: "src/__registry__/blocks/chat-03/page.tsx",
		meta: undefined,
    },	"app-01": {
		name: "app-01",
		description: "A app with generative UI capabilities.",
		type: "registry:block",
		registryDependencies: ["avatar","input","label","tabs","resizable","breadcrumb","button","toggle-group","switch","separator","card","badge","dialog","slider","https://simple-ai.dev/r/chat-input.json","https://simple-ai.dev/r/chat-message-area.json","https://simple-ai.dev/r/chat-message.json","https://simple-ai.dev/r/jsx-renderer.json","https://simple-ai.dev/r/jsx-utils.json"],
		files: [{
			path: "src/registry/blocks/app-01/page.tsx",
			type: "registry:page",
			target: "app/generative-ui/page.tsx"
		},{
			path: "src/registry/blocks/app-01/canvas/page.tsx",
			type: "registry:page",
			target: "app/canvas/page.tsx"
		},{
			path: "src/registry/blocks/app-01/route.ts",
			type: "registry:page",
			target: "app/api/ai/generate/route.ts"
		},{
			path: "src/registry/blocks/app-01/hooks/generation-store.ts",
			type: "registry:hook",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/versions.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/editor-layout.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/editor-toolbar.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/code-editor.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/preview.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/chat-dialog.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-01/components/copy-button.tsx",
			type: "registry:component",
			target: ""
		}],
		categories: ["app"],
		component: React.lazy(() => import("@/registry/blocks/app-01/page.tsx")),
		source: "src/__registry__/blocks/app-01/page.tsx",
		meta: undefined,
    },	"app-02": {
		name: "app-02",
		description: "A persona generator app with structured outputs.",
		type: "registry:block",
		registryDependencies: ["dialog","button","input","textarea","label","scroll-area","form","skeleton","card","avatar"],
		files: [{
			path: "src/registry/blocks/app-02/page.tsx",
			type: "registry:page",
			target: "app/persona/page.tsx"
		},{
			path: "src/registry/blocks/app-02/route.ts",
			type: "registry:page",
			target: "app/api/ai/persona/route.ts"
		},{
			path: "src/registry/blocks/app-02/components/persona-display.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-02/types/persona.ts",
			type: "registry:lib",
			target: "app/types/persona.ts"
		},{
			path: "src/registry/blocks/app-02/lib/example-businesses.ts",
			type: "registry:lib",
			target: ""
		}],
		categories: ["app"],
		component: React.lazy(() => import("@/registry/blocks/app-02/page.tsx")),
		source: "src/__registry__/blocks/app-02/page.tsx",
		meta: undefined,
    },	"app-03": {
		name: "app-03",
		description: "An X profile bio generator app.",
		type: "registry:block",
		registryDependencies: ["button","dialog","input","textarea","form","label","select","skeleton","avatar"],
		files: [{
			path: "src/registry/blocks/app-03/page.tsx",
			type: "registry:page",
			target: "app/x-profile/page.tsx"
		},{
			path: "src/registry/blocks/app-03/layout.tsx",
			type: "registry:page",
			target: "app/x-profile/layout.tsx"
		},{
			path: "src/registry/blocks/app-03/route.ts",
			type: "registry:page",
			target: "app/api/ai/x-profile/route.ts"
		},{
			path: "src/registry/blocks/app-03/components/profile-generate-dialog.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-03/components/x-preview.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-03/components/toolbar.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-03/components/theme-toggle.tsx",
			type: "registry:component",
			target: ""
		},{
			path: "src/registry/blocks/app-03/types/x.ts",
			type: "registry:lib",
			target: "app/types/x.ts"
		},{
			path: "src/registry/blocks/app-03/lib/profile-examples.ts",
			type: "registry:lib",
			target: ""
		}],
		categories: ["app"],
		component: React.lazy(() => import("@/registry/blocks/app-03/page.tsx")),
		source: "src/__registry__/blocks/app-03/page.tsx",
		meta: undefined,
    },	"flow-01": {
		name: "flow-01",
		description: "A flow chart builder.",
		type: "registry:block",
		registryDependencies: ["button","card","dialog","input","textarea"],
		files: [{
			path: "src/registry/blocks/flow-01/page.tsx",
			type: "registry:page",
			target: "app/flow/page.tsx"
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/blocks/flow-01/page.tsx")),
		source: "src/__registry__/blocks/flow-01/page.tsx",
		meta: undefined,
    },	"jsx-utils": {
		name: "jsx-utils",
		description: "A set of utilities for working with JSX.",
		type: "registry:lib",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/lib/jsx-utils.ts",
			type: "registry:lib",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/lib/jsx-utils.ts")),
		source: "",
		meta: undefined,
    },
}
