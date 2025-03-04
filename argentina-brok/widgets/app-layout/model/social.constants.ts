import FacebookIcon from '@/public/assets/social/facebook.svg';
import InstagramIcon from '@/public/assets/social/instagram.svg';
import LinkedInIcon from '@/public/assets/social/linkedin.svg';
import TelegramIcon from '@/public/assets/social/telegram.svg';
import YouTubeIcon from '@/public/assets/social/youtube.svg';

export interface Icon {
	href: string;
	width?: number;
	SvgIcon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export type IconListProps = {
	items: Array<Icon>;
	className?: string;
};

export const SOCIAL_MEDIA_LINKS: Array<Icon> = [
	{
		width: 24,
		href: 'https://www.facebook.com/',
		SvgIcon: FacebookIcon,
	},
	{
		width: 24,
		href: 'https://www.instagram.com/',
		SvgIcon: InstagramIcon,
	},
	{
		width: 24,
		href: 'https://www.linkedin.com/',
		SvgIcon: LinkedInIcon,
	},
	{
		width: 24,
		href: 'https://web.telegram.org/a/',
		SvgIcon: TelegramIcon,
	},
	{
		width: 24,
		href: 'https://www.youtube.com/',
		SvgIcon: YouTubeIcon,
	},
];
