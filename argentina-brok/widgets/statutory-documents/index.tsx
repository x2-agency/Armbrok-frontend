import cx from 'clsx';
import parser from 'html-react-parser';

import type { StatutoryDocumentsProps } from '@/shared/types/documents';
import { Container } from '@/shared/ui/container';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';

export const StatutoryDocuments = ({
	documents,
	title,
	className,
	columns = 3,
	fileDirection = 'row',
}: StatutoryDocumentsProps) => {
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
							alternativeText=""
							direction={fileDirection}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
