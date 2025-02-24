import cx from 'clsx';

import type { Category } from '@/shared/types/article';

import css from './index.module.css';
import { Tab } from './Tab';

type TabsProps = {
	tags?: Array<Category>;
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
	isAllTag = true,
	className = '',
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
							title="all"
							data-value="all"
							handleClick={handleClick}
						/>
					)}
					{tags?.map(tag => {
						return (
							<Tab
								key={tag.id}
								title={tag.name}
								handleClick={handleClick}
								className={cx({
									[css[tabColor]]: selectedTag === tag.name,
								})}
							/>
						);
					})}
				</section>
			)}
		</>
	);
};
