import {
	MOCK_DEFAULT_BANNER,
	MOCK_PROFIX_BANNER,
	MOCK_ABOUT_BANNER,
} from '@/shared/model/mock-banner.constants';
import { BannerSection } from '@/widgets/banner-section/ui';

const HomePage = () => {
	return (
		<BannerSection
			type="default"
			banner={MOCK_DEFAULT_BANNER}
			alignContent="end"
		/>
	);
};

export default HomePage;
