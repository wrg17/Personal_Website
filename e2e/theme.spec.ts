import { expect, test } from '@playwright/test';

test('theme toggle flips stylesheet and persists across reload', async ({ page }) => {
	await page.goto('/');

	const themeLink = page.locator('link[rel="stylesheet"][href*="/theme/"]');
	await expect(themeLink).toHaveAttribute('href', '/theme/light.css');

	const toggle = page.getByRole('button', { name: /toggle color theme/i });
	await expect(toggle).toHaveAttribute('aria-pressed', 'false');

	await toggle.click();
	await expect(themeLink).toHaveAttribute('href', '/theme/dark.css');
	await expect(toggle).toHaveAttribute('aria-pressed', 'true');

	await page.reload();
	await expect(themeLink).toHaveAttribute('href', '/theme/dark.css');
	await expect(page.getByRole('button', { name: /toggle color theme/i })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
});
