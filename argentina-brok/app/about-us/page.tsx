import type { Metadata } from 'next';

import { AboutUs } from '@/view/about-us';

export const metadata: Metadata = {
	title: 'About us',
};

const AboutUsPage = () => {
	return <AboutUs />;
};

export default AboutUsPage;
