import cx from 'clsx';
import parser from 'html-react-parser';

import type { DocumentsSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Document } from './ui/document';

type FileSectionProps = DocumentsSectionProps & {
	className?: string;
	enabled?: boolean;
};

export const FileSection = ({
	title,
	description,
	className,
	documents,
	enabled,
}: FileSectionProps) => {
	if (!documents || documents.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			<ul className={css.list} id="internal-rules">
				{(title || description) && enabled && (
					<div className={css.titleBlock}>
						{title && <h3 className={css.title}>{parser(title)}</h3>}
						{description && parser(description)}
					</div>
				)}
				{documents.map((document, index) => (
					<li key={index} className={css.listItem}>
						<Document
							name={document.name ?? ''}
							url={document.file?.url ?? ''}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
