import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { Locales } from '@/i18n/routing';
import { getAllRegulationInternals } from '@/shared/api/get-all-regulation-internals';
import { getRegulationInternalsPage } from '@/shared/api/get-regulation-internals';
import type { LocaleParams, SlugParams } from '@/shared/types/params';
import { RegulationInternals } from '@/view/regulation/[slug]';

export async function generateMetadata({
	params,
}: LocaleParams & SlugParams): Promise<Metadata> {
	const { slug, locale } = await params;
	setRequestLocale(locale);

	const data = await getRegulationInternalsPage(slug);

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

export const revalidate = 1;

export const generateStaticParams = async () => {
	const initialData = await getAllRegulationInternals();
	const slugs = initialData?.data?.map(item => item.slug) ?? [];

	const result = slugs.flatMap(slug =>
		Object.values(Locales).map(locale => ({
			slug,
			locale,
		}))
	);

	return result;
};

const RegulationSlugPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	const regulationData = await getRegulationInternalsPage(slug);

	if (!regulationData) {
		notFound();
	}

	return <RegulationInternals data={regulationData} />;
};

export default RegulationSlugPage;
