import type { ArticleType } from '@/view/armbrok-media/slug';
import { Article } from '@/view/armbrok-media/slug';

const ArticlePage = ({ data }: ArticleType) => {
	return <Article data={data} />;
};

export default ArticlePage;
