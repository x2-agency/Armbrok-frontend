import {
	MOCK_ABOUT_BANNER,
	MOCK_DEFAULT_BANNER,
	MOCK_PROFIX_BANNER,
	HERO_DATA,
} from '@/shared/model/mock-banner.constants';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HeroSection } from '@/widgets/hero-section/ui';

const HomePage = () => {
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

export default HomePage;
