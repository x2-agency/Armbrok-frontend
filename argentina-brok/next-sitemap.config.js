const { LOCALES, WEBSITE_URLS } = require('./website-locale');

module.exports = {
	siteUrl: process.env.WEBSITE_DOMAIN || 'https://example.com',
	generateRobotsTxt: true,
	exclude: ['/error', '/not-found'],
	generateIndexSitemap: true,
	additionalPaths: async config =>
		LOCALES.flatMap(locale =>
			WEBSITE_URLS.map(path => {
				const loc = `${config.siteUrl}/${locale}${path}`;
				return {
					loc,
					changefreq: 'daily',
					priority: path === '/' ? 1.0 : 0.7,
					lastmod: new Date().toISOString(),
					alternateRefs: LOCALES.map(altLocale => ({
						hreflang: altLocale,
						href: `${config.siteUrl}/${altLocale}${path}`,
					})),
				};
			})
		),
};
