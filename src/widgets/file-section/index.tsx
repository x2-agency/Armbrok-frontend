import cx from 'clsx';
import parser from 'html-react-parser';

import type {
	DocumentsSectionProps,
	MediaData,
} from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { DocumentFile } from './ui/document-file';

type FileSectionProps = DocumentsSectionProps & {
	className?: string;
	enabled?: boolean;
	regulationsFile?: MediaData;
	variant?: 'file' | 'link';
};

export const FileSection = ({
	title,
	description,
	className,
	documents,
	enabled,
	variant = 'file',
	linkLabel,
}: FileSectionProps) => {
	if (!documents || documents.length === 0) {
		return null;
	}

	const isLink = variant === 'link';

	return (
		<Container className={cx(css.root, className)}>
			<div className={css.wrap}>
				<h2 className={css.title}>{parser(title ?? '')}</h2>
			</div>

			<ul className={css.list} id="internal-rules">
				{description && enabled && (
					<div className={css.titleBlock}>
						{description && parser(description)}
					</div>
				)}
				{documents.map((document, index) => (
					<li key={index} className={css.listItem}>
						<DocumentFile
							name={document.name ?? ''}
							url={
								isLink
									? (document.link ?? '')
									: (document.file?.url ?? '')
							}
							variant={variant}
							linkLabel={linkLabel}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
