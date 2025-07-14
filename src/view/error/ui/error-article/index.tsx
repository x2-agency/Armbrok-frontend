import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type ErrorArticleProps = {
	title: string;
	description: string;
	button?: {
		text: string;
		href: string;
	};
};

export const ErrorArticle = ({
	title,
	description,
	button,
}: ErrorArticleProps) => {
	return (
		<article className={css.root}>
			<h1 className={css.title}>{parser(title)}</h1>
			<p className={cx(css.description, { [css.withButton]: button })}>
				{parser(description)}
			</p>
			{button && (
				<Button
					href={button.href}
					className={css.button}
					variant="filled"
					category="big"
				>
					{parser(button.text)}
				</Button>
			)}
		</article>
	);
};
