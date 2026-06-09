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

test('hobbies page lists at least one hobby tile', async ({ page }) => {
	const response = await page.goto('/hobbies');
	expect(response?.status()).toBe(200);
	await expect(page.getByRole('heading', { name: /Hobby placeholder/i, level: 2 })).toBeVisible();
});

test('project detail page renders banner heading', async ({ page }) => {
	const response = await page.goto('/projects/project/p1');
	expect(response?.status()).toBe(200);
	await expect(page.getByRole('heading', { name: 'Project One', level: 1 })).toBeVisible();
});
