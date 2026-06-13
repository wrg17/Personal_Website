import { projects } from '$lib/data/projects';

import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://williamgeorge.dev';

const staticRoutes = ['/', '/projects', '/hobbies'];

export const GET: RequestHandler = () => {
	const urls = [
		...staticRoutes.map((path) => `${SITE_URL}${path}`),
		...projects.map((p) => `${SITE_URL}/projects/${p.slug}`)
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `\t<url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;

	return new Response(body, { headers: { 'content-type': 'application/xml' } });
};
