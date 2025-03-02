import cx from 'clsx';

import type { Category } from '@/shared/types/blog';

import css from './index.module.css';
import { Tab } from './Tab';

type TabsProps = {
	tags: Array<Category>;
	onChangeTab: (event: any) => void;
	currentTag: string;
	isCasesExists: boolean;
	initialTag: string;
	isAllTag?: boolean;
	className?: string;
	tabColor?: string;
};
export const Tabs = ({
	tags,
	onChangeTab,
	currentTag,
	isCasesExists,
	initialTag,
	className = '',
	isAllTag = true,
	tabColor = 'white',
}: TabsProps) => {
	if (!isCasesExists) {
		return null;
	}
	const selectedTag = currentTag === '' ? initialTag : currentTag;

	const handleClick: TabsProps['onChangeTab'] = event => {
		const { value } = event.currentTarget.dataset;
		onChangeTab(value);
	};

	const isTagsMoreThanTwo = isAllTag || tags.length > 1;
	return (
		<>
			{isTagsMoreThanTwo && (
				<section className={cx(css.root, className)}>
					{isAllTag && (
						<Tab
							className={cx(css.tab, {
								[css.white]: selectedTag === initialTag,
							})}
							name="all"
							data-value="all"
							handleClick={handleClick}
						/>
					)}
					{tags.map((tag, index) => {
						return (
							<Tab
								key={index}
								name={tag.name ?? ''}
								data-value={tag.slug}
								handleClick={handleClick}
								className={cx({
									[css[tabColor]]: selectedTag === tag.slug,
								})}
							/>
						);
					})}
				</section>
			)}
		</>
	);
};
