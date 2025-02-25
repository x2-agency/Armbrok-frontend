import { getBlogPage } from '@/shared/api/get-blog-page';
import { Blog } from '@/view/armbrok-media/slug';

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
