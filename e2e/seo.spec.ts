import { expect, test } from '@playwright/test';

test('robots.txt is served and blocks crawlers while placeholder content exists', async ({
	request
}) => {
	const res = await request.get('/robots.txt');
	expect(res.status()).toBe(200);
	expect(res.headers()['content-type']).toMatch(/text\/plain/);

	const body = await res.text();
	expect(body).toMatch(/User-agent:\s*\*/);
	expect(body).toMatch(/Disallow:\s*\//);
	expect(body).toMatch(/Sitemap:\s+https?:\/\//);
});

test('sitemap.xml is served and lists at least the static and project routes', async ({
	request
}) => {
	const res = await request.get('/sitemap.xml');
	expect(res.status()).toBe(200);
	expect(res.headers()['content-type']).toMatch(/xml/);

	const body = await res.text();
	expect(body).toContain('<urlset');
	expect(body).toContain('/projects/project-one</loc>');
	expect(body).toContain('/projects</loc>');
	expect(body).toContain('/hobbies</loc>');
});
