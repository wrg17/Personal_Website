import { describe, expect, it } from 'vitest';
import { get } from 'svelte/store';
import { theme } from './stores';

describe('theme store', () => {
	it('defaults to light', () => {
		expect(get(theme)).toBe('light');
	});

	it('updates when set', () => {
		theme.set('dark');
		expect(get(theme)).toBe('dark');
		theme.set('light');
		expect(get(theme)).toBe('light');
	});
});
