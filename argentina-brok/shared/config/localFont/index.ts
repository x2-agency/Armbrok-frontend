import localFont from 'next/font/local';
export const RobotoFonts = localFont({
	src: [
		{
			path: '../../../public/fonts/Roboto.ttf',
			weight: '400',
			style: 'normal',
		},

		{
			path: '../../../public/fonts/Roboto-medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
});
