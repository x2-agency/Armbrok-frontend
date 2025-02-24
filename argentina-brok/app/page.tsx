import type { Metadata } from 'next';

import { getArticle } from '@/shared/api/get-article';
import { getHomePage } from '@/shared/api/get-homepage';
import { Home } from '@/view/home';
import { HOME_OG } from '@/view/home/types/meta.constants';

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`),
	title: HOME_OG.title,
	description: HOME_OG.description,
	openGraph: HOME_OG,
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
