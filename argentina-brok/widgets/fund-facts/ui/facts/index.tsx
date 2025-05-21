import parser from 'html-react-parser';

import type { FundFactSectionProps } from '@/shared/types/global.types';
import { ListParagraph } from '@/shared/ui/list-paragraph';

import css from './index.module.css';

export const Facts = ({ title, items }: FundFactSectionProps) => {
	if (!(items && items.length)) return null;

	return (
		<div className={css.root}>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			<ul className={css.root}>
				{items.map((value, index) => (
					<li className={css.paragraph} key={index}>
						<ListParagraph
							className={css.element}
							leftPart={value.title ?? ''}
							rightPart={value.description ?? ''}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
