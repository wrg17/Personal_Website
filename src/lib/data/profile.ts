export interface CTA {
	label: string;
	href: string;
}

// Edit these two constants to control the home page hero.

export const positioningLine = 'Backend engineer at North. University of Michigan grad.';

export const homeCTAs: CTA[] = [
	{ label: 'About me', href: '/about' },
	{ label: 'Download resume', href: '/resume' },
	{ label: 'Get in touch', href: '/contact' }
];
