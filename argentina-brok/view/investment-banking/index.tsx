import type { NextPage } from 'next';

import { MOCK_INVESTMENT_BANKING_BANNER } from '@/shared/model/mock-banner.constants';
import { HERO_DATA } from '@/shared/model/mock-banner.constants';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
export const InvestmentBanking: NextPage = () => {
	return (
		<>
			<BannerSection
				type="default"
				banner={MOCK_INVESTMENT_BANKING_BANNER}
				alignContent="end"
			/>
			<HeroContainer>
				<TitleSection data={HERO_DATA.titleSection} />
			</HeroContainer>
		</>
	);
};
