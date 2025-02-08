import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import { Document, type DocumentProps } from '@/shared/ui/document';

import css from './index.module.css';

type StatutoryDocumentsProps = {
	className?: string;
	title?: string;
	documents: Array<DocumentProps>;
};

export const StatutoryDocuments = ({
	documents,
	title,
	className,
}: StatutoryDocumentsProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{title && <h2>{parser(title)}</h2>}
			<div className={css.documents}>
				{documents.map((document, key) => (
					<Document key={key} {...document} />
				))}
			</div>
		</Container>
	);
};
