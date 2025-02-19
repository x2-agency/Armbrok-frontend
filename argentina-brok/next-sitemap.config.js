module.exports = {
	siteUrl: process.env.WEBSITE_DOMAIN || 'https://example.com', // YOUR WEBSITE DOMAIN
	generateRobotsTxt: true, // robots.tsx GENERATION
	exclude: [''], // EXCLUDED PAGES
	generateIndexSitemap: false, // SITEMAP SPLIT
	transform: async (config, path) => {
		const locales = ['en', 'fr', 'de'];
		const defaultLocale = 'en';

		return locales.map(locale => ({
			loc: `${config.siteUrl}/${locale}${path === '/' ? '' : path}`,
			changefreq: 'daily',
			priority: path === '/' ? 1.0 : 0.7,
			lastmod: new Date().toISOString(),
			alternates: locales.map(altLocale => ({
				hreflang: altLocale,
				href: `${config.siteUrl}/${altLocale}${path === '/' ? '' : path}`,
			})),
			canonical: `${config.siteUrl}/${defaultLocale}${path === '/' ? '' : path}`,
		}));
	},
};
