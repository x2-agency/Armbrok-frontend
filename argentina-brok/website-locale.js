// If changes occur here, then apply them in the website-locale.ts

module.exports = {
	LOCALES: ['en', 'hy', 'ru'],
	WEBSITE_URLS: [
		{ path: '/', priority: 1, changefreq: 'daily' },
		{ path: '/about-us', priority: 0.7, changefreq: 'daily' },
		{ path: '/media', priority: 0.7, changefreq: 'daily' },
		{ path: '/asset-management', priority: 0.7, changefreq: 'daily' },
		{ path: '/brokerage', priority: 0.7, changefreq: 'daily' },
		{ path: '/careers-at-armbrok', priority: 0.7, changefreq: 'daily' },
		{ path: '/depositary-services', priority: 0.7, changefreq: 'daily' },
		{ path: '/investment-banking', priority: 0.7, changefreq: 'daily' },
		{ path: '/investor-relations', priority: 0.7, changefreq: 'daily' },
		{ path: '/contact-us', priority: 0.3, changefreq: 'weekly' },
		{ path: '/armbrok-search', priority: 0.3, changefreq: 'weekly' },
		{ path: '/funds', priority: 0.7, changefreq: 'daily' },
		{ path: '/media', priority: 0.7, changefreq: 'daily' },
		{ path: '/regulation', priority: 0.2, changefreq: 'weekly' },
	],
	EXCLUDED_PATHS: ['/error', '/not-found'],
};
