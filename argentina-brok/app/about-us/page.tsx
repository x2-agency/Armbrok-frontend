import type { Metadata } from 'next';

import { getAboutUsPage } from '@/shared/api/get-about-us';
import { AboutUs } from '@/view/about-us';

export const metadata: Metadata = {
	title: 'About us',
};

const AboutUsPage = async () => {
	try {
		const initialAboutUsPageData = await getAboutUsPage();

		return <AboutUs />;
	} catch {
		return <AboutUs />;
	}
};

export default AboutUsPage;
