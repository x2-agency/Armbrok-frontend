import type { Metadata } from 'next';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { AboutUs } from '@/view/about-us';
import { ABOUT_US_META } from '@/view/about-us/model/about-us.constants';

export const metadata: Metadata = ABOUT_US_META;

const AboutUsPage = async () => {
	const initialAboutUsPageData = await getAboutUsPage();

	return <AboutUs {...initialAboutUsPageData?.data} />;
};

export default AboutUsPage;
