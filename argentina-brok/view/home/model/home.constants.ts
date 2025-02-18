import AppIcon from '@/public/assets/icon/app.svg';
import type { InteractiveVideoType } from '@/widgets/interactive-video/types/interactive-video';
export const HOME_ASSETS_TITLE = 'Asset Management';
export const HOME_ASSETS_DESCRIPTION =
	'Managing Your Capital in&nbsp;Your Best Interests';
export const HOME_ASSETS_BUTTON = 'Request a consultation';

export const HOME_ASSETS_HREF = '#';

export const HOME_ASSETS_IMAGE = '/assets/images/home/hand_up.png';

export const HOME_INTERACTIVE_VIDEO: InteractiveVideoType = {
	title: 'Armbrok is&nbsp;an&nbsp;Armenia-based leading investment company',
	description:
		'We&nbsp;provide our clients with a&nbsp;full range of&nbsp;financial and investment services.',
	src: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
	poster: {
		src: '/assets/images/poster_video.jpg',
	},
	descriptionVideo: 'Watch Interview with Company Founder',
	firstButtonText: 'Open account',
	lastButtonText: 'Request a&nbsp;consultation',
};

export const HOME_APP_SECTION = {
	IconSvg: AppIcon,
	title: 'Brokerage',
	description:
		'For Self-Directed Investing. <br/>Start your investment journey today.',
	preview: 'Coming soon <br/> 1Q25',
	button: 'Open account',
	image: [
		{
			src: '/assets/images/iphone/iphone_15.png',
			alt: 'iphone',
		},
		{
			src: '/assets/images/iphone/iphone_15_pro.png',
			alt: 'iphone',
		},
	],
};

export const BANNER_DATA = {
	title: 'Efficient investments in&nbsp;financial markets',
	description:
		'Access to&nbsp;global exchanges and financial instruments &mdash; with high yields and strong protection',
};
