import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type DocumentProps = {
	name: string;
	url: string;
};

export const Document = ({ name, url }: DocumentProps) => {
	return (
		<article className={cx(css.root, 'p-32')}>
			<p className={css.title}>{parser(name)}</p>
			<Button
				download={url}
				variant="next"
				iconRotate={270}
				className={css.button}
			>
				Download
			</Button>
			<Link href={url} className={css.link} target="_blank" download />
		</article>
	);
};
