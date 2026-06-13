import { expect, test } from '@playwright/test';

test('home loads with intro heading', async ({ page }) => {
	const response = await page.goto('/');
	expect(response?.status()).toBe(200);
	await expect(page.getByRole('heading', { name: /I'm William George/i })).toBeVisible();
});

test('projects page lists at least one project tile', async ({ page }) => {
	const response = await page.goto('/projects');
	expect(response?.status()).toBe(200);
	await expect(page.getByRole('heading', { name: 'Project One', level: 2 })).toBeVisible();
});

test('project detail page renders banner heading', async ({ page }) => {
	const response = await page.goto('/projects/project-one');
	expect(response?.status()).toBe(200);
	await expect(page.getByRole('heading', { name: 'Project One', level: 1 })).toBeVisible();
});

test('unknown project slug returns 404', async ({ page }) => {
	const response = await page.goto('/projects/no-such-project');
	expect(response?.status()).toBe(404);
	await expect(page.getByRole('heading', { name: /page not found/i, level: 1 })).toBeVisible();
});
