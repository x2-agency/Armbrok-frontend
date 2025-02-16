import type { NextPage } from 'next';

import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';

import type { InvestorRelationsPageResponse } from './types/response';

export const InvestorRelations: NextPage<{
	initialData?: InvestorRelationsPageResponse;
}> = ({ initialData }) => {
	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: initialData?.data.heroSection?.title ?? '',
					description: initialData?.data.heroSection?.description ?? '',
					button: initialData?.data.heroSection?.button,
					poster: initialData?.data.heroSection?.background,
				}}
				alignContent="center"
			/>
			<HeroContainer>
				<TitleSection
					title={initialData?.data.transparencySection?.title ?? ''}
					description={initialData?.data.transparencySection?.description}
				/>
			</HeroContainer>
		</>
	);
};
