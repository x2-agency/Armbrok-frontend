import localFont from 'next/font/local';

export const InterFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/Inter-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Inter-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Inter-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Inter-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-inter',
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
