import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/', '/projects', '/hobbies', '/projects/project/p1'];

for (const path of routes) {
	test(`${path} has no serious or critical a11y violations`, async ({ page }) => {
		await page.goto(path);

		const results = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
			.analyze();

		const blocking = results.violations.filter((v) =>
			['serious', 'critical'].includes(v.impact ?? '')
		);

		expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
	});
}
