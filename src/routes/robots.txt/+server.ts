import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://williamgeorge.dev';

// While the site is still mostly placeholder content, block all crawlers.
// To launch: remove the `Disallow: /` line below.
const body = `User-agent: *
Disallow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const GET: RequestHandler = () =>
	new Response(body, { headers: { 'content-type': 'text/plain' } });
