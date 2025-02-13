const FAVICON_DATA = [
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '57x57',
		type: 'image/png',
		path: '/assets/icons/favicons/57x57.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '114x114',
		type: 'image/png',
		path: '/assets/icons/favicons/114x114.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '72x72',
		type: 'image/png',
		path: '/assets/icons/favicons/72x72.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '144x144',
		type: 'image/png',
		path: '/assets/icons/favicons/144x144.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '60x60',
		type: 'image/png',
		path: '/assets/icons/favicons/60x60.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '120x120',
		type: 'image/png',
		path: '/assets/icons/favicons/120x120.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '76x76',
		type: 'image/png',
		path: '/assets/icons/favicons/76x76.png',
	},
	{
		rel: 'apple-touch-icon-precomposed',
		sizes: '152x152',
		type: 'image/png',
		path: '/assets/icons/favicons/152x152.png',
	},
	{
		rel: 'icon',
		sizes: '16x16',
		type: 'image/png',
		path: '/assets/icons/favicons/16x16.png',
	},
	{
		rel: 'icon',
		sizes: '32x32',
		type: 'image/png',
		path: '/assets/icons/favicons/32x32.png',
	},
	{
		rel: 'icon',
		sizes: '57x57',
		type: 'image/png',
		path: '/assets/icons/favicons/57x57.png',
	},
	{
		rel: 'icon',
		sizes: '60x60',
		type: 'image/png',
		path: '/assets/icons/favicons/60x60.png',
	},
	{
		rel: 'icon',
		sizes: '72x72',
		type: 'image/png',
		path: '/assets/icons/favicons/72x72.png',
	},
	{
		rel: 'icon',
		sizes: '76x76',
		type: 'image/png',
		path: '/assets/icons/favicons/76x76.png',
	},
	{
		rel: 'icon',
		sizes: '96x96',
		type: 'image/png',
		path: '/assets/icons/favicons/96x96.png',
	},
	{
		rel: 'icon',
		sizes: '114x114',
		type: 'image/png',
		path: '/assets/icons/favicons/114x114.png',
	},
	{
		rel: 'icon',
		sizes: '120x120',
		type: 'image/png',
		path: '/assets/icons/favicons/120x120.png',
	},
	{
		rel: 'icon',
		sizes: '128x128',
		type: 'image/png',
		path: '/assets/icons/favicons/128x128.png',
	},
	{
		rel: 'icon',
		sizes: '144x144',
		type: 'image/png',
		path: '/assets/icons/favicons/144x144.png',
	},
	{
		rel: 'icon',
		sizes: '152x152',
		type: 'image/png',
		path: '/assets/icons/favicons/152x152.png',
	},
	{
		rel: 'icon',
		sizes: '196x196',
		type: 'image/png',
		path: '/assets/icons/favicons/196x196.png',
	},
];

export const Favicons = () => {
	return (
		<>
			{FAVICON_DATA.map(({ rel, sizes, type, path }) => (
				<link key={sizes} rel={rel} sizes={sizes} type={type} href={path} />
			))}
		</>
	);
};
