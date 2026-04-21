/* eslint-disable @next/next/no-img-element */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import { downloadFile } from '@/shared/helpers/download-file';
import type { MediaData } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const Document = ({
	direction,
	file,
	name,
	label,
	columns,
	lineClamp,
	className,
	variant = 'file',
}: MediaData & {
	direction?: string;
	columns?: number;
	lineClamp?: number;
	className?: string;
	variant?: 'file' | 'link';
}) => {
	if (!file) {
		return null;
	}

	const isLink = variant === 'link';

	const defineIcon = () => {
		if (file.ext === '.xlsx') {
			return '/assets/icon/file/excel.svg';
		} else {
			return '/assets/icon/file/file.svg';
		}
	};

	const removeFileExtension = (filename: string) => {
		return filename.replace(/\.[^/.]+$/, '');
	};

	const comesName = name ? name : removeFileExtension(file.name ?? '');
	const hasLabel = label ? label : file.ext && file.size;

	const formatName = (text: string) => {
		if (text.length <= 45) {
			return parser(text);
		}
		return parser(text.slice(0, 45) + '...');
	};

	return (
		<article
			className={cx(css.root, className, css[direction ?? ''], {
				[css.file]: label,
				[css.link]: isLink,
			})}
		>
			<div className={css.leftPart}>
				{!isLink && (
					<img loading="lazy" src={defineIcon()} className={css.icon} />
				)}
				<div className={css.header}>
					{comesName && (
						<h3
							className={cx(
								css.name,
								{ [css.newName]: file.name },
								{
									[css.bigWidth]: !isLink && columns && columns < 3,
								}
							)}
							style={{ WebkitLineClamp: lineClamp }}
						>
							{isLink ? parser(comesName) : formatName(comesName)}
						</h3>
					)}
					{!isLink && hasLabel && (
						<div className={css.info}>
							{file.ext && (
								<p className={css.type}>
									{parser(file.ext.slice(1).toUpperCase())}
								</p>
							)}
							{!label && <div className={css.circle} />}
							{file.size && (
								<p className={css.size}>{Math.floor(file.size)}KB</p>
							)}
							{label && <p className={css.size}>{parser(label)}</p>}
						</div>
					)}
				</div>
			</div>
			{isLink ? (
				<Button variant="next" iconRotate={180} className={css.button}>
					Link
				</Button>
			) : (
				<Button
					variant="next"
					iconRotate={270}
					className={css.button}
					onClick={() => downloadFile(file.url ?? '', name || 'file')}
				>
					{!label && 'Download'}
				</Button>
			)}
			<Link
				href={file.url ?? '#'}
				className={css.downloadLink}
				target="_blank"
			/>
		</article>
	);
};
