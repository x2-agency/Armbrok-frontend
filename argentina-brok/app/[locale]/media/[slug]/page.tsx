import type { Metadata } from 'next';

import { getBlogPage } from '@/shared/api/get-blog-page';
import { getParentFunds } from '@/shared/api/get-parent-funds';
import { Blog } from '@/view/media/slug';

export const revalidate = 10;

export async function generateMetadata({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> {
	const { slug } = await params;
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
