export interface CTA {
	label: string;
	href: string;
}

// Edit these three constants to control the home page hero.

export const positioningLine =
	'CS + IOE senior at Michigan. I build [your thing]. Replace this sentence with your one-line pitch.';

// Optional. Leave as null until you want a "looking for X starting Y" banner on home.
export const statusLine: string | null = null;

export const homeCTAs: CTA[] = [
	{ label: 'About me', href: '/about' },
	{ label: 'Download resume', href: '/resume' },
	{ label: 'Get in touch', href: '/contact' }
];
