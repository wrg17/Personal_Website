import { expect, test } from '@playwright/test';

test('theme toggle flips the dark class on <html> and persists across reload', async ({ page }) => {
	await page.goto('/');

	const html = page.locator('html');
	await expect(html).not.toHaveClass(/(^|\s)dark(\s|$)/);

	const toggle = page.getByRole('button', { name: /toggle color theme/i });
	await expect(toggle).toHaveAttribute('aria-pressed', 'false');

	await toggle.click();
	await expect(html).toHaveClass(/(^|\s)dark(\s|$)/);
	await expect(toggle).toHaveAttribute('aria-pressed', 'true');

	await page.reload();
	await expect(html).toHaveClass(/(^|\s)dark(\s|$)/);
	await expect(page.getByRole('button', { name: /toggle color theme/i })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
});
