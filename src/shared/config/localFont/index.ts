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

export const NeuePlakFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/Neue-Plak-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Neue-Plak-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Neue-Plak-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-neue-plak',
	preload: true,
});

export const MontserratArmFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/Montserratarm-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Montserratarm-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Montserratarm-SemiBold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Montserratarm-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-armenian',
	preload: true,
});
