import parser from 'html-react-parser';

import type { AboutFundItemProps } from '@/shared/types/global.types';
import { ListParagraph } from '@/shared/ui/list-paragraph';

import css from './index.module.css';

export const AboutFundItem = ({ title, items }: AboutFundItemProps) => {
	return (
		<div className={css.root}>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			<ul className={css.list}>
				{items.map((item, index) => (
					<li className={css.paragraph} key={index}>
						<ListParagraph
							leftPart={item.title ?? ''}
							rightPart={item.description ?? ''}
							className={css.item}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
