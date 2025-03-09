import cx from 'clsx';

import type { DocumentsSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { Document } from './ui/document';

type FileSectionProps = DocumentsSectionProps & {
	className?: string;
};

export const FileSection = ({ className, documents }: FileSectionProps) => {
	if (!documents || documents.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			<ul className={css.list} id="exchange-rules">
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
