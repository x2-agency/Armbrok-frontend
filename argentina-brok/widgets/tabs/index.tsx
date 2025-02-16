import cx from 'clsx';

import css from './index.module.css';
import { Tab } from './Tab';

type TagsData = {
	title: string;
	slug: string;
};

type TabsProps = {
	tags: Array<TagsData>;
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
					{tags.map(tag => {
						return (
							<Tab
								key={tag.slug}
								title={tag.title}
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
