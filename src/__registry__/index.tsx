// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
	"chat-input": {
		name: "chat-input",
		description: "",
		type: "registry:ui",
		registryDependencies: ["textarea"],
		files: [{
			path: "src/registry/ui/chat-input.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-input.tsx")),
		source: "",
		meta: undefined,
    },
}
