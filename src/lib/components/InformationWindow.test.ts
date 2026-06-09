import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import InformationWindow from './InformationWindow.svelte';

const sampleProject = {
	title: 'Sample Project',
	image: '/img/sample.jpg',
	imageAlt: 'A sample',
	description: 'A short description of the project.',
	link: '/projects/project/p1'
};

describe('InformationWindow', () => {
	it('renders the project title, description, image, and link', () => {
		render(InformationWindow, sampleProject);

		expect(screen.getByRole('heading', { name: 'Sample Project' })).toBeInTheDocument();
		expect(screen.getByText('A short description of the project.')).toBeInTheDocument();

		const img = screen.getByAltText('A sample');
		expect(img).toHaveAttribute('src', '/img/sample.jpg');

		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', '/projects/project/p1');
	});
});
