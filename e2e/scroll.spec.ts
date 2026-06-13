import { expect, test } from '@playwright/test';

async function makeTall(page: import('@playwright/test').Page) {
	await page.addStyleTag({ content: 'main { min-height: 4000px; }' });
}

test('forward link navigation lands at the top of the new page', async ({ page }) => {
	await page.goto('/projects');
	await makeTall(page);
	await page.evaluate(() => window.scrollTo({ top: 1500, left: 0, behavior: 'instant' }));
	expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(1000);

	await page.locator('header nav').getByRole('link', { name: 'About' }).click();
	await expect(page).toHaveURL('/about');

	expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test('back navigation lands at the top of the previous page', async ({ page }) => {
	await page.goto('/projects');
	await makeTall(page);
	await page.evaluate(() => window.scrollTo({ top: 1500, left: 0, behavior: 'instant' }));
	expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(1000);

	await page.locator('header nav').getByRole('link', { name: 'About' }).click();
	await expect(page).toHaveURL('/about');

	await page.goBack();
	await expect(page).toHaveURL('/projects');

	expect(await page.evaluate(() => window.scrollY)).toBe(0);
});
