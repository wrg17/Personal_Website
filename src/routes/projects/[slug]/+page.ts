import { findProject, projects } from '$lib/data/projects';

import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const prerender = true;

export const entries = () => projects.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const project = findProject(params.slug);
	if (!project) throw error(404, `No project with slug "${params.slug}"`);
	return { project };
};
