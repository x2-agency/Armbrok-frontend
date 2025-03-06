import type { Metadata } from 'next';

import { getAwards } from '@/shared/api/get-awards';
import { getHomePage } from '@/shared/api/get-homepage';
import { Home } from '@/view/home';
import { HOME_OG } from '@/view/home/types/meta.constants';

export const metadata: Metadata = {
	metadataBase: process.env.WEBSITE_DOMAIN
		? new URL(`${process.env.WEBSITE_DOMAIN}`)
		: undefined,
	title: HOME_OG.title,
	description: HOME_OG.description,
	openGraph: HOME_OG,
};

export const revalidate = 10;

const IndexPage = async () => {
	const initialHomePageData = await getHomePage();
	const initialAwards = await getAwards({ pageSize: 4 });

	if (initialHomePageData?.data) {
		initialHomePageData.awards = initialAwards;
	}

	return (
		<Home initialData={initialHomePageData} initialAwards={initialAwards} />
	);
};

export default IndexPage;
