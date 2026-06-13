import { expect, test } from '@playwright/test';

test.describe('card image delivery', () => {
	for (const path of ['/projects', '/']) {
		test(`${path} card serves an AVIF variant in Chromium`, async ({ page }) => {
			await page.goto(path);

			const cardImg = page.locator('picture img').first();
			await cardImg.waitFor({ state: 'visible' });

			const currentSrc = await cardImg.evaluate((el) => (el as HTMLImageElement).currentSrc);
			expect(currentSrc).toMatch(/\.avif(\?.*)?$/);
		});
	}
});
