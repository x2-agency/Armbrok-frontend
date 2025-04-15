const FAVICON_DATA = [
	{
		rel: 'apple-touch-icon',
		sizes: '57x57',
		type: '',
		path: '/assets/icons/favicons/apple-icon-57x57.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '60x60',
		type: '',
		path: '/assets/icons/favicons/apple-icon-60x60.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '72x72',
		type: '',
		path: '/assets/icons/favicons/apple-icon-72x72.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '76x76',
		type: '',
		path: '/assets/icons/favicons/apple-icon-76x76.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '114x114',
		type: '',
		path: '/assets/icons/favicons/apple-icon-114x114.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '120x120',
		type: '',
		path: '/assets/icons/favicons/apple-icon-120x120.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '144x144',
		type: '',
		path: '/assets/icons/favicons/apple-icon-144x144.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '152x152',
		type: '',
		path: '/assets/icons/favicons/apple-icon-152x152.png',
	},
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		type: '',
		path: '/assets/icons/favicons/apple-icon-180x180.png',
	},
	{
		rel: 'icon',
		sizes: '192x192',
		type: 'image/png',
		path: '/assets/icons/favicons/android-icon-192x192.png',
	},
	{
		rel: 'icon',
		sizes: '32x32',
		type: 'image/png',
		path: '/assets/icons/favicons/favicon-32x32.png',
	},
	{
		rel: 'icon',
		sizes: '96x96',
		type: 'image/png',
		path: '/assets/icons/favicons/favicon-96x96.png',
	},
	{
		rel: 'icon',
		sizes: '16x16',
		type: 'image/png',
		path: '/assets/icons/favicons/favicon-16x16.png',
	},
];

export const Favicons = () => {
	return (
		<>
			{FAVICON_DATA.map(({ rel, sizes, type, path }, index) => (
				<link key={index} rel={rel} sizes={sizes} type={type} href={path} />
			))}
		</>
	);
};
