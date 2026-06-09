import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Tabs from './Tabs.svelte';

describe('Tabs', () => {
	it('renders one button per item and marks the active one', () => {
		render(Tabs, { items: ['One', 'Two', 'Three'], activeItem: 'Two' });

		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(3);

		expect(screen.getByRole('button', { name: 'Two' })).toHaveClass('active');
		expect(screen.getByRole('button', { name: 'One' })).not.toHaveClass('active');
	});

	it('calls onTabChange with the clicked item', async () => {
		const onTabChange = vi.fn();
		render(Tabs, { items: ['One', 'Two'], activeItem: 'One', onTabChange });

		await userEvent.click(screen.getByRole('button', { name: 'Two' }));

		expect(onTabChange).toHaveBeenCalledExactlyOnceWith('Two');
	});
});
