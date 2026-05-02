import cx from 'clsx';
import parser from 'html-react-parser';
import type { FC } from 'react';

import { parserOptions } from '@/shared/ui/content-markup/lib/parser-options';

import css from './index.module.css';

type ContentMarkupProps = {
	html?: string;
	extraClass?: string;
};

const ContentMarkup: FC<ContentMarkupProps> = ({ html, extraClass = '' }) => {
	return (
		<section className={cx(css.markup, extraClass)}>
			{parser(html ?? '', parserOptions)}
		</section>
	);
};

export default ContentMarkup;
