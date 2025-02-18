import type { Metadata } from 'next';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { AboutUs } from '@/view/about-us';

export const metadata: Metadata = {
	title: 'About us',
};

const AboutUsPage = async () => {
	const initialAboutUsPageData = await getAboutUsPage();

	return <AboutUs {...initialAboutUsPageData?.data} />;
};

export default AboutUsPage;
