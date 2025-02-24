import { getArticle } from '@/shared/api/get-article';
import { getAuthor } from '@/shared/api/get-author';
import { Blog } from '@/view/armbrok-media/slug';

const BlogPage = async () => {
	try {
		const [initialBlogPage, initialAuthor] = await Promise.all([
			getArticle(),
			getAuthor(),
		]);

		return (
			<Blog initialBlogPage={initialBlogPage} initialAuthor={initialAuthor} />
		);
	} catch {
		return <Blog />;
	}
};

export default BlogPage;
