import type { NextPage } from 'next';

import { MOCK_DEFAULT_BANNER } from '@/shared/model/mock-banner.constants';
import { HERO_DATA } from '@/shared/model/mock-banner.constants';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HeroSection } from '@/widgets/hero-section/ui';
export const Home: NextPage = () => {
	return (
		<>
			<BannerSection
				type="default"
				banner={MOCK_DEFAULT_BANNER}
				alignContent="end"
			/>
			<HeroSection {...HERO_DATA} />
		</>
	);
};
