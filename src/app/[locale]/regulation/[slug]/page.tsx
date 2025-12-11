import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getRegulationInternals } from '@/shared/api/get-regulation-internals';
import type { LocaleParams, SlugParams } from '@/shared/types/params';
import { RegulationInternals } from '@/view/regulation/[slug]';

export async function generateMetadata({
	params,
}: LocaleParams & SlugParams): Promise<Metadata> {
	const { slug, locale } = await params;
	setRequestLocale(locale);

	const data = await getRegulationInternals(slug);

	if (!data) {
		return {
			title: 'Page not found',
		};
	}

	return {
		title: data.title,
		description: data.description,
		openGraph: {
			title: data.title,
			description: data.description,
			images: [`${data?.image ?? ''}`],
		},
	};
}
const RegulationSlugPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	const regulationData = await getRegulationInternals(slug);

	if (!regulationData) {
		notFound();
	}

	return <RegulationInternals data={regulationData} />;
};

export default RegulationSlugPage;
