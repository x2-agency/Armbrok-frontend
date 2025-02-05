import type { PropsWithChildren } from 'react';

import type { PosterImageProps } from '@/shared/types/poster';

export interface BackButtonProps extends PropsWithChildren {
	className?: string;
}

interface ButtonProps {
	href: string;
	text: string;
}

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
	button?: ButtonProps;
}

export interface AwardsData {
	place: string;
	title: string;
	description: string;
}

interface BaseBannerProps {
	type: string;
	alignContent?: 'start' | 'center' | 'end' | '';
	banner: {
		title: string;
		description: string;
		poster: PosterImageProps;
	};
}

type ProfixBannerProps = BaseBannerProps & {
	className?: string;
	type: 'profix';
	alignContent?: never;
	banner: BaseBannerProps['banner'] & {
		panel: PanelProps;
		icon: string;
	};
};

type DefaultBannerProps = BaseBannerProps & {
	className?: string;
	type: 'default';
	banner: BaseBannerProps['banner'] & {
		button: ButtonProps;
	};
};

type AboutBannerProps = BaseBannerProps & {
	className?: string;
	type: 'about';
	alignContent?: never;
	banner: BaseBannerProps['banner'] & {
		established: string;
		awards: Array<AwardsData>;
	};
};

export type BannerProps =
	| ProfixBannerProps
	| DefaultBannerProps
	| AboutBannerProps;

interface BaseBannerHeadProps {
	type: string;
	headData: {
		title: string;
		description: string;
	};
}

type ProfixBannerHeadProps = BaseBannerHeadProps & {
	className?: string;
	type: 'profix';
	headData: BaseBannerHeadProps['headData'] & {
		icon: string;
		established?: never;
	};
};

type DefaultBannerHeadProps = BaseBannerHeadProps & {
	className?: string;
	type: 'default';
	headData: BaseBannerHeadProps['headData'] & {
		icon?: never;
		established?: never;
	};
};

type AboutBannerHeadProps = BaseBannerHeadProps & {
	className?: string;
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
	type: string;
	bodyData: Record<string, unknown>;
}

type ProfixBannerBodyProps = BaseBannerBodyProps & {
	className?: string;
	type: 'profix';
	bodyData: {
		panel: PanelProps;
		awards?: never;
		button?: never;
	};
};

type DefaultBannerBodyProps = BaseBannerBodyProps & {
	className?: string;
	type: 'default';
	bodyData: {
		panel?: never;
		awards?: never;
		button: ButtonProps;
	};
};

type AboutBannerBodyProps = BaseBannerBodyProps & {
	className?: string;
	type: 'about';
	bodyData: {
		awards: Array<AwardsData>;
		panel?: never;
		button?: never;
	};
};

export type BannerBodyProps =
	| ProfixBannerBodyProps
	| DefaultBannerBodyProps
	| AboutBannerBodyProps;
