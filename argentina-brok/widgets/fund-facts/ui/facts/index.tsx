import type { ItemDetail } from '@/shared/types/global.types';
import { ListParagraph } from '@/shared/ui/list-paragraph';

import css from './index.module.css';

export const Facts = ({ content }: { content: Array<ItemDetail> }) => {
	return (
		<ul className={css.root}>
			{content.map((value, index) => (
				<li className={css.paragraph} key={index}>
					<ListParagraph
						leftPart={value.title ?? ''}
						rightPart={value.description ?? ''}
					/>
				</li>
			))}
		</ul>
	);
};
