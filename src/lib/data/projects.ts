import type { Project } from '$lib/types';

const oceanSrcset = '/img/ocean-480.jpeg 480w, /img/ocean-800.jpeg 800w';
const oceanAvifSrcset = '/img/ocean-480.avif 480w, /img/ocean-800.avif 800w';

export const projects: Project[] = [
	{
		slug: 'project-one',
		title: 'Project One',
		image: '/img/ocean-800.jpeg',
		imageSrcset: oceanSrcset,
		imageAvifSrcset: oceanAvifSrcset,
		imageAlt: 'Placeholder project thumbnail',
		description: 'Placeholder description — replace with a real project summary.',
		link: '/projects/project-one'
	}
];

export const hobbies: Project[] = [
	{
		slug: 'hobby-placeholder',
		title: 'Hobby placeholder',
		image: '/img/ocean-800.jpeg',
		imageSrcset: oceanSrcset,
		imageAvifSrcset: oceanAvifSrcset,
		imageAlt: 'Placeholder hobby thumbnail',
		description: 'Placeholder description — replace with a real hobby write-up.',
		link: '#'
	}
];

export function findProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
