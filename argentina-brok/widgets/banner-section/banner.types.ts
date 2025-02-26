import type {
	LinkItem,
	HeroFactoid,
} from '@/shared/types/global.types';
import type { PosterImageProps } from '@/shared/types/poster';

export interface PanelProps {
	className?: string;
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
	button?: LinkItem;
}

export interface AwardsData {
	place?: number;
	title?: string;
	description?: string;
}

interface BaseBannerProps {
	className?: string;
	type: string;
	alignContent?: 'start' | 'center' | 'end' | '';
	banner: {
		title: string;
		description: string;
		poster?: PosterImageProps;
	};
}

type ProfixBannerProps = BaseBannerProps & {
	type: 'profix';
	alignContent?: never;
	banner: BaseBannerProps['banner'] & {
		panel: PanelProps;
		icon: string;
	};
};

type DefaultBannerProps = BaseBannerProps & {
	type: 'default';
	banner: BaseBannerProps['banner'] & {
		button?: LinkItem;
	};
};

type AboutBannerProps = BaseBannerProps & {
	type: 'about';
	alignContent?: never;
	banner: BaseBannerProps['banner'] & {
		established?: string;
		awards?: Array<AwardsData>;
	};
};

export type BannerProps =
	| ProfixBannerProps
	| DefaultBannerProps
	| AboutBannerProps;

interface BaseBannerHeadProps {
	className?: string;
	type: string;
	headData: {
		title: string;
		description: string;
	};
}

export type ProfixBannerHeadProps = BaseBannerHeadProps & {
	type: 'profix';
	headData: BaseBannerHeadProps['headData'] & {
		icon: string;
		established?: never;
	};
};

export type DefaultBannerHeadProps = BaseBannerHeadProps & {
	type: 'default';
	headData: BaseBannerHeadProps['headData'] & {
		icon?: never;
		established?: never;
	};
};

export type AboutBannerHeadProps = BaseBannerHeadProps & {
	type: 'about';
	headData: BaseBannerHeadProps['headData'] & {
		icon?: never;
		established: string;
	};
};

export type BannerHeadProps =
	| ProfixBannerHeadProps
	| DefaultBannerHeadProps
	| AboutBannerHeadProps;

interface BaseBannerBodyProps {
	className?: string;
	type: string;
	bodyData: Record<string, unknown>;
}

export type ProfixBannerBodyProps = BaseBannerBodyProps & {
	type: 'profix';
	bodyData: {
		panel: PanelProps;
		awards?: never;
		button?: never;
	};
};

export type DefaultBannerBodyProps = BaseBannerBodyProps & {
	type: 'default';
	bodyData: {
		panel?: never;
		awards?: never;
		button: LinkItem;
	};
};

export type AboutBannerBodyProps = BaseBannerBodyProps & {
	type: 'about';
	bodyData: {
		awards: Array<HeroFactoid>;
		panel?: never;
		button?: never;
	};
};

export type BannerBodyProps =
	| ProfixBannerBodyProps
	| DefaultBannerBodyProps
	| AboutBannerBodyProps;
