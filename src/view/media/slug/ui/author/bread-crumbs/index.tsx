import Link from 'next/link';

import ArrowRightSvg from '@/public/assets/icon/arrow/arrow_right.svg';
import type { Category } from '@/shared/types/media-page';

import css from './index.module.css';
type BreadcrumbsProps = {
	category: Category;
	title: string;
};

export const Breadcrumbs = ({ category, title }: BreadcrumbsProps) => {
	return (
		<nav className={css.root}>
			<Link
				className={css.link}
				href={`/media?category=${category?.slug?.toLowerCase()}`}
			>
				{category.name}
			</Link>
			<ArrowRightSvg className={css.arrow} />
			<p className={css.title}>{title}</p>
		</nav>
	);
};
