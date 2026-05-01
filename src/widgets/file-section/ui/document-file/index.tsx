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
	variant?: 'file' | 'link';
	linkLabel?: string;
};

export const DocumentFile = ({
	name,
	url,
	variant = 'file',
	linkLabel,
}: DocumentFileProps) => {
	const isLink = variant === 'link';

	return (
		<article className={css.root}>
			<p className={css.title}>{parser(name)}</p>
			{isLink ? (
				<Button variant="next" iconRotate={135} className={css.button}>
					{linkLabel ?? 'Link'}
				</Button>
			) : (
				<Button
					variant="next"
					iconRotate={270}
					className={css.button}
					onClick={() => downloadFile(url, name)}
				>
					Download
				</Button>
			)}
			<Link
				href={url}
				className={css.link}
				target="_blank"
				download={!isLink}
			/>
		</article>
	);
};
