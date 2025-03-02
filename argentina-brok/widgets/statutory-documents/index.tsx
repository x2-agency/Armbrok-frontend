import cx from 'clsx';
import parser from 'html-react-parser';

import type { DocumentsSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';

export type StatutoryDocumentsProps = {
	className?: string;
	documentsSection?: DocumentsSectionProps;
	columns?: number;
	fileDirection?: 'row' | 'column';
};

export const StatutoryDocuments = ({
	documentsSection,
	className,
	columns = 3,
	fileDirection = 'row',
}: StatutoryDocumentsProps) => {
	const { title, documents } = documentsSection ?? {};

	if (!documents || documents.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul
				className={css.documents}
				style={{
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{documents.map((document, key) => (
					<li key={key}>
						<Document
							name={document.name}
							file={document.file}
							alternativeText={document.alternativeText}
							direction={fileDirection}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
