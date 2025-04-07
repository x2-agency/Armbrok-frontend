import type { NextPage } from 'next';

import { BannerSection } from '@/widgets/banner-section/ui';

import type { FundPageData } from './types/response';

export const Fund: NextPage<FundPageData> = ({ heroSection }) => {
	return (
		<BannerSection
			type="profix"
			banner={{
				title: heroSection?.title ?? '',
				description: heroSection?.description ?? '',
				panel: heroSection?.infoCard,
				icon: heroSection?.background.url ?? '',
			}}
		/>
	);
};
