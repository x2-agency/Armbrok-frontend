import localFont from 'next/font/local';

export const RobotoFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/roboto-r.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/roboto-m.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/roboto-sb.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/roboto-b.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-roboto',
	preload: true,
});

export const ArmenianFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/NotoSansArmenian-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/NotoSansArmenian-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/NotoSansArmenian-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/NotoSansArmenian-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-armenian',
	preload: true,
});
