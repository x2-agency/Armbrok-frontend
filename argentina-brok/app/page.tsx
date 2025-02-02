import { MOCK_BANNER_DATA } from '@/shared/model/mock-banner.constants';
import { BannerSection } from '@/widgets/banner-section/ui';

const HomePage = () => {
	return (
		<BannerSection
			banner={MOCK_BANNER_DATA}
			alignContent="center"
			size="small"
		/>
	);
};

export default HomePage;
