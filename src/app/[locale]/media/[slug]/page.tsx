import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getIsrArticles } from '@/shared/api/get-article';
import { getBlogPage } from '@/shared/api/get-blog-page';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { LocaleParams, SlugParams } from '@/shared/types/params';
import { Blog } from '@/view/media/slug';

export const revalidate = 1;

export async function generateMetadata({
	params,
}: LocaleParams & SlugParams): Promise<Metadata> {
	const { slug, locale } = await params;
	setRequestLocale(locale);

	const data = await getBlogPage(slug);
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

type BlogPageProps = {
	params: {
		slug: string;
	};
};

export const generateStaticParams = async () => {
	try {
		const response = await getIsrArticles({ limit: 25 });
		const locales = ['en', 'ru', 'hy'];

		if (!response?.data?.length) {
			return [];
		}

		return locales.flatMap(locale =>
			(response?.data ?? []).map(article => ({
				slug: article.slug,
				locale,
			}))
		);
	} catch (error) {
		console.error(error);

		return [];
	}
};

const BlogPage = async ({ params }: BlogPageProps) => {
	const { slug } = await params;
	const [initialBlogPage, initialFunds] = await Promise.all([
		getBlogPage(slug),
		getParentFunds(),
	]);
	return (
		<Blog initialBlogPage={initialBlogPage} parentFunds={initialFunds.data} />
	);
};

export default BlogPage;
