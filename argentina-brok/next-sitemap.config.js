const { LOCALES, WEBSITE_URLS, EXCLUDED_PATHS } = require('./website-locale');

module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || 'https://example.com',
	generateRobotsTxt: true,
	exclude: EXCLUDED_PATHS,
	generateIndexSitemap: false,
	additionalPaths: async config =>
		LOCALES.flatMap(locale =>
			WEBSITE_URLS.map(({ path, priority, changefreq }) => {
				const loc =
					path === '/'
						? `${config.siteUrl}/${locale}`
						: `${config.siteUrl}/${locale}${path}`;

				return {
					loc,
					changefreq,
					priority,
					lastmod: new Date().toISOString(),
				};
			})
		),
};
