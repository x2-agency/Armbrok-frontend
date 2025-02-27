/* eslint-disable @next/next/no-img-element */
'use client';
import cx from 'clsx';
import parser from 'html-react-parser';

import type { MediaData } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const Document = ({
	direction,
	file,
	name,
}: MediaData & { direction: string }) => {
	if (!file) {
		return null;
	}

	return (
		<article className={cx(css.root, css[direction])}>
			<div className={css.leftPart}>
				<img src="/assets/icon/file/file.svg" alt="file" className={css.icon} />
				{name && <h3 className={css.name}>{parser(name)}</h3>}
				{file.ext && file.size && (
					<div className={css.info}>
						{file.ext && (
							<p className={css.type}>
								{parser(file.ext.slice(1).toUpperCase())}
							</p>
						)}
						<div className={css.circle} />
						{file.size && <p className={css.size}>{file.size * 10}KB</p>}
					</div>
				)}
			</div>
			<Button variant="next" iconRotate={270} className={css.button}>
				Download
			</Button>
			<a href={file.url} className={css.downloadLink} download />
		</article>
	);
};
