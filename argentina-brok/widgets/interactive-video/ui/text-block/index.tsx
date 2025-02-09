import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import type { InteractiveProps } from '@/widgets/interactive-video/model/interactive-video';

import css from './index.module.css';

export const TextBlock = ({ data }: InteractiveProps) => {
	const { title, description, firstButtonText, lastButtonText } = data;
	return (
		<article className={cx(css.root)}>
			<h2 className={css.title}>{parser(title)}</h2>
			<p className={css.description}>{parser(description)}</p>
			<div className={css.wrapButton}>
				<Button href="#" category="big" variant="filled">
					{parser(firstButtonText)}
				</Button>
				<Button
					className={css.button}
					href="#"
					category="big"
					variant="outline"
				>
					{parser(lastButtonText)}
				</Button>
			</div>
		</article>
	);
};
