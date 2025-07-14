import type {
	BannerProps,
	DefaultBannerBodyProps,
	ProfixBannerBodyProps,
	AboutBannerBodyProps,
} from '@/widgets/banner-section/banner.types';

export const defineBodyContent = ({
	type,
	banner,
}: BannerProps):
	| DefaultBannerBodyProps
	| ProfixBannerBodyProps
	| AboutBannerBodyProps => {
	const commonData = {
		type,
	};

	if (type === 'default') {
		return {
			...commonData,
			bodyData: {
				button: banner.button,
			},
		} as DefaultBannerBodyProps;
	} else if (type === 'about') {
		return {
			...commonData,
			bodyData: {
				awards: banner.awards,
			},
		} as AboutBannerBodyProps;
	} else if (type === 'profix') {
		return {
			...commonData,
			bodyData: {
				panel: banner.panel,
			},
		} as ProfixBannerBodyProps;
	}

	return {
		...commonData,
		bodyData: {},
	} as DefaultBannerBodyProps;
};
