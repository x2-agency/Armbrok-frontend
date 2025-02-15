import type { Metadata } from 'next';

import { getHomePage } from '@/shared/api/get-homepage';
import { Home } from '@/view/home';

export const metadata: Metadata = {
	title: 'Home page',
};

const IndexPage = async () => {
	const initialHomePageData = await getHomePage();

	return <Home initialData={initialHomePageData || undefined} />;
};

export default IndexPage;
