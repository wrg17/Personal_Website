const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/projects/index.svelte"),
	() => import("../../src/routes/projects/project/__layout.reset.svelte"),
	() => import("../../src/routes/projects/project/p1/index.svelte"),
	() => import("../../src/routes/hobbies/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects/index.svelte
	[/^\/projects\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/projects/project/p1/index.svelte
	[/^\/projects\/project\/p1\/?$/, [c[4], c[5]], []],

	// src/routes/hobbies/index.svelte
	[/^\/hobbies\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];