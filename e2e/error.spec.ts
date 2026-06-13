import { expect, test } from '@playwright/test';

test('unknown route returns 404 and renders the styled error page', async ({ page }) => {
	const response = await page.goto('/this-page-does-not-exist');
	expect(response?.status()).toBe(404);

	await expect(page.getByText(/error 404/i)).toBeVisible();
	await expect(page.getByRole('heading', { name: /page not found/i, level: 1 })).toBeVisible();
	await expect(page.locator('main').getByRole('link', { name: /home/i })).toBeVisible();
});
