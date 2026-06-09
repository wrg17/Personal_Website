import { beforeEach, describe, expect, it } from 'vitest';
import { get } from 'svelte/store';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Header from './Header.svelte';
import { theme } from '$lib/stores';

describe('Header', () => {
	beforeEach(() => {
		theme.set('light');
	});

	it('marks the active nav link with aria-current="page"', () => {
		render(Header, { current: 'projects' });

		expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page');
		expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
		expect(screen.getByRole('link', { name: 'Hobbies' })).not.toHaveAttribute('aria-current');
	});

	it('toggles the theme store and persists to localStorage when the avatar button is clicked', async () => {
		render(Header, { current: 'home' });

		const toggle = screen.getByRole('button', { name: /toggle color theme/i });
		expect(toggle).toHaveAttribute('aria-pressed', 'false');

		await userEvent.click(toggle);

		expect(get(theme)).toBe('dark');
		expect(toggle).toHaveAttribute('aria-pressed', 'true');
		expect(localStorage.getItem('theme')).toBe('dark');

		await userEvent.click(toggle);

		expect(get(theme)).toBe('light');
		expect(localStorage.getItem('theme')).toBe('light');
	});
});
