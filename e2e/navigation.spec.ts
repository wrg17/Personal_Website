import { expect, test } from '@playwright/test';

test('header nav routes between pages', async ({ page }) => {
	await page.goto('/');
	const headerNav = page.locator('header nav');

	await headerNav.getByRole('link', { name: 'Projects' }).click();
	await expect(page).toHaveURL('/projects');
	await expect(page.getByRole('heading', { name: 'Project One', level: 2 })).toBeVisible();

	await headerNav.getByRole('link', { name: 'About' }).click();
	await expect(page).toHaveURL('/about');
	await expect(page.getByRole('heading', { name: 'About', level: 1 })).toBeVisible();

	await headerNav.getByRole('link', { name: 'Home' }).click();
	await expect(page).toHaveURL('/');
	await expect(page.getByRole('heading', { name: /I'm William George/i })).toBeVisible();
});

test('active nav link has aria-current="page"', async ({ page }) => {
	await page.goto('/projects');
	await expect(page.locator('header nav').getByRole('link', { name: 'Projects' })).toHaveAttribute(
		'aria-current',
		'page'
	);
});
