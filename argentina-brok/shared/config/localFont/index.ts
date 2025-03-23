import localFont from 'next/font/local';

export const RobotoFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/roboto-regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/roboto-medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/roboto-semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/roboto-bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	preload: true,
});
