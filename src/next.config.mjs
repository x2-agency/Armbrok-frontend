import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.jsx',
			},
		},
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: "frame-ancestors 'self' https://www.google.com;",
					},
				],
			},
		];
	},
};

export default withNextIntl(nextConfig);