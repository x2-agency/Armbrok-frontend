import FacebookIcon from '@/public/assets/social/facebook.svg';
import InstagramIcon from '@/public/assets/social/instagram.svg';
import LinkedInIcon from '@/public/assets/social/linkedin.svg';

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
		href: 'https://www.facebook.com/Armbrok/',
		SvgIcon: FacebookIcon,
	},
	{
		width: 24,
		href: 'https://www.instagram.com/armbrok.am/',
		SvgIcon: InstagramIcon,
	},
	{
		width: 24,
		href: 'https://www.linkedin.com/company/armbrok-investment-company',
		SvgIcon: LinkedInIcon,
	},
];
