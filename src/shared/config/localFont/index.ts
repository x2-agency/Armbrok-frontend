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
			path: '../../../public/fonts/Neue-Plak-Text-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Neue-Plak-Text-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Neue-Plak-Text-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Neue-Plak-Text-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-neue-plak',
	preload: true,
});

export const NeuePlakCondensedFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/Neue-Plak-Condensed-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-neue-plak-condensed',
	preload: true,
});

export const MontserratArmFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/Montserratarm-new-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Montserratarm-new-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Montserratarm-new-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Montserratarm-new-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-armenian',
	preload: true,
});
