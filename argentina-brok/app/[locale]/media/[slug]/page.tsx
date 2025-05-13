import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { getBlogPage } from '@/shared/api/get-blog-page';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import type { LocaleParams, SlugParams } from '@/shared/types/params';
import { Blog } from '@/view/media/slug';

export const revalidate = 10;

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
