import type { Metadata } from 'next';

import { getHomePage } from '@/shared/api/get-homepage';
import { Home } from '@/view/home';
import { HOME_OG } from '@/view/home/types/meta.constants';

export const metadata: Metadata = {
	metadataBase: process.env.NEXT_PUBLIC_HOST_URL
		? new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`)
		: undefined,
	title: HOME_OG.title,
	description: HOME_OG.description,
	openGraph: HOME_OG,
};

const IndexPage = async () => {
	const initialHomePageData = await getHomePage();

	return <Home initialData={initialHomePageData || undefined} />;
};

export default IndexPage;
