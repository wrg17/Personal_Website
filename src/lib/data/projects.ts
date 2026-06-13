import type { Project } from '$lib/types';

const oceanSrcset =
	'/img/ocean-480.jpeg 480w, /img/ocean-800.jpeg 800w, /img/ocean-1200.jpeg 1200w';

export const projects: Project[] = [
	{
		title: 'Project One',
		image: '/img/ocean-800.jpeg',
		imageSrcset: oceanSrcset,
		imageAlt: 'Placeholder project thumbnail',
		description: 'Placeholder description — replace with a real project summary.',
		link: '/projects/project/p1'
	}
];

export const hobbies: Project[] = [
	{
		title: 'Hobby placeholder',
		image: '/img/ocean-800.jpeg',
		imageSrcset: oceanSrcset,
		imageAlt: 'Placeholder hobby thumbnail',
		description: 'Placeholder description — replace with a real hobby write-up.',
		link: '#'
	}
];
