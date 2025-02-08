export const APP_STORE_SVG = '/assets/social/app_store.svg';
export const GOOGLE_PLAY_SVG = '/assets/social/google_play.svg';
export const FACEBOOK_SVG = '/assets/social/facebook.svg';
export const INSTAGRAM_SVG = '/assets/social/instagram.svg';
export const LINKEDIN_SVG = '/assets/social/linkedin.svg';
export const TELEGRAM_SVG = '/assets/social/telegram.svg';
export const YOUTUBE_SVG = '/assets/social/youtube.svg';

export interface Icon {
	src: string;
	href: string;
	width?: number;
}

export type IconListProps = {
	items: Array<Icon>;
	className?: string;
};

export const STORE_LINKS: Array<Icon> = [
	{ src: GOOGLE_PLAY_SVG, href: '#' },
	{ src: APP_STORE_SVG, href: '#' },
];

export const SOCIAL_MEDIA_LINKS: Array<Icon> = [
	{ src: FACEBOOK_SVG, width: 24, href: '#' },
	{ src: INSTAGRAM_SVG, width: 24, href: '#' },
	{ src: LINKEDIN_SVG, width: 24, href: '#' },
	{ src: TELEGRAM_SVG, width: 24, href: '#' },
	{ src: YOUTUBE_SVG, width: 24, href: '#' },
];
