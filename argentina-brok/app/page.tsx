import {
	MOCK_DEFAULT_BANNER,
	MOCK_PROFIX_BANNER,
	MOCK_ABOUT_BANNER,
} from '@/shared/model/mock-banner.constants';
import { BannerSection } from '@/widgets/banner-section/ui';

const HomePage = () => {
	return <BannerSection type="about" banner={MOCK_ABOUT_BANNER} />;
};

export default HomePage;
