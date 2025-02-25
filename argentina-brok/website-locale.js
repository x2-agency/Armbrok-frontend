// If changes occur here, then apply them in the website-locale.ts

module.exports = {
	LOCALES: ['en', 'hy', 'ru'],
	WEBSITE_URLS: [
		{ path: '/', priority: 1, changefreq: 'daily' },
		{ path: '/about-us', priority: 0.7, changefreq: 'daily' },
		{ path: '/armbrok-media', priority: 0.7, changefreq: 'daily' },
		{ path: '/asset-management', priority: 0.7, changefreq: 'daily' },
		{ path: '/brokerage', priority: 0.7, changefreq: 'daily' },
		{ path: '/careers-at-armbrock', priority: 0.7, changefreq: 'daily' },
		{ path: '/depositary-services', priority: 0.7, changefreq: 'daily' },
		{ path: '/investment-banking', priority: 0.7, changefreq: 'daily' },
		{ path: '/investor-relations', priority: 0.7, changefreq: 'daily' },
	],
	EXCLUDED_PATHS: ['/error', '/not-found'],
};
