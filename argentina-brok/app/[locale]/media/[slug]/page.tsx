import type { Metadata } from 'next';

import { getBlogPage } from '@/shared/api/get-blog-page';
import { REVALIDATE_VALUE } from '@/shared/config/revalidate';
import { Blog } from '@/view/media/slug';

export const revalidate = REVALIDATE_VALUE;

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
	const initialBlogPage = await getBlogPage(slug);
	return <Blog initialBlogPage={initialBlogPage} />;
};

export default BlogPage;
