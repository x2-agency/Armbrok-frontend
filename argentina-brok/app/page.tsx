import { Banner } from '@/widgets/banner/ui';
import { MOCK_BANNER_DATA } from '@/shared/model/mock-banner.constants';

const HomePage = () => {
	return (
		<div>
			<Banner banner={MOCK_BANNER_DATA} />
		</div>
	);
};

export default HomePage;
