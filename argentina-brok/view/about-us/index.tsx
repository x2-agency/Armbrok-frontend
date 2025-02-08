import type { NextPage } from 'next';

import { MOCK_ABOUT_BANNER } from '@/shared/model/mock-banner.constants';
import { BannerSection } from '@/widgets/banner-section/ui';

export const AboutUs: NextPage = () => {
	return (
		<>
			<BannerSection type="about" banner={MOCK_ABOUT_BANNER} />
		</>
	);
};
