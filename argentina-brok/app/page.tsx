import type { Metadata } from 'next';

import { getArticle } from '@/shared/api/get-article';
import { getHomePage } from '@/shared/api/get-homepage';
import { Home } from '@/view/home';

export const metadata: Metadata = {
	title: 'Home page',
};

const IndexPage = async () => {
	const initialHomePageData = await getHomePage();
	const initialNewsCard = await getArticle();

	return (
		<Home
			initialData={initialHomePageData || undefined}
			initialNewsCard={initialNewsCard}
		/>
	);
};

export default IndexPage;
