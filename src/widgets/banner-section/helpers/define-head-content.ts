import type {
	BannerProps,
	BannerHeadProps,
	ProfixBannerHeadProps,
	AboutBannerHeadProps,
	DefaultBannerHeadProps,
} from '@/widgets/banner-section/banner.types';

export const defineHeadContent = ({
	type,
	banner,
}: BannerProps): BannerHeadProps => {
	const commonData = {
		type,
		headData: {
			title: banner.title,
			description: banner.description,
		},
	};

	if (type === 'profix') {
		return {
			...commonData,
			headData: {
				...commonData.headData,
				icon: banner.icon ?? '',
			},
		} as ProfixBannerHeadProps;
	} else if (type === 'about') {
		return {
			...commonData,
			headData: {
				...commonData.headData,
				established: banner.established,
			},
		} as AboutBannerHeadProps;
	}

	return commonData as DefaultBannerHeadProps;
};
