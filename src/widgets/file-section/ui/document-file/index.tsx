'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { downloadFile } from '@/shared/helpers/download-file';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type DocumentFileProps = {
	name: string;
	url: string;
};

export const DocumentFile = ({ name, url }: DocumentFileProps) => {
	return (
		<article className={cx(css.root, 'p-32')}>
			<p className={css.title}>{parser(name)}</p>
			<Button
				variant="next"
				iconRotate={270}
				className={css.button}
				onClick={() => downloadFile(url, name)}
			>
				Download
			</Button>
			<Link href={url} className={css.link} target="_blank" download />
		</article>
	);
};
