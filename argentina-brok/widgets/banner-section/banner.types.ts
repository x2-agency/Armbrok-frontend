import type { ReactNode } from 'react';

import type { PosterImageProps } from '@/shared/types/poster';

export interface BackButtonProps {
	children: ReactNode;
	className?: string;
}

interface ButtonProps {
	href: string;
	text: string;
}

export interface PanelProps {
	averagePercent?: {
		percent: number;
		text: string;
	};
	amd?: {
		subtext: string;
		description: string;
	};
	riskLevel?: {
		risk: number;
		text: string;
	};
	period?: {
		title: string;
		description: string;
	};
	button?: ButtonProps;
}

export interface BannerAwardsData {
	place: string;
	title: string;
	description: string;
}

type BannerSizeProps = {
	size?: 'small' | 'medium' | 'large';
};

export interface BannerProps extends BannerSizeProps {
	alignContent?: 'start' | 'center' | 'end' | '';
	banner: {
		title: string;
		description: string;
		poster?: PosterImageProps;
		button?: ButtonProps;
		panel?: PanelProps;
		icon?: string;
		established?: string;
		awards?: Array<BannerAwardsData>;
	};
}

export interface BannerHeadProps {
	title: string;
	description: string;
	established?: string;
	icon?: string;
	className?: string;
	withBackButton?: boolean;
}

export interface BannerBodyProps extends BannerSizeProps {
	awards?: Array<BannerAwardsData>;
	panel?: PanelProps;
	button?: ButtonProps;
	className?: string;
}
