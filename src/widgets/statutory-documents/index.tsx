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
	lineClamp?: number;
	variant?: 'file' | 'link';
};

export const StatutoryDocuments = ({
	documentsSection,
	className,
	columns = 3,
	fileDirection = 'row',
	lineClamp = 3,
	variant = 'file',
}: StatutoryDocumentsProps) => {
	const { title, documents, description } = documentsSection ?? {};

	return (
		<Container className={cx(css.root, className)}>
			{(title || description) && (
				<div className={css.titleBlock}>
					{title && (
						<h2 className={css.title} id="laws">
							{parser(title)}
						</h2>
					)}
					{description && (
						<div className={css.description}>{parser(description ?? '')}</div>
					)}
				</div>
			)}
			{documents && documents.length > 0 && (
				<ul
					className={cx(css.documents, {
						[css.centered]: documents?.length === 1,
					})}
					style={
						documents?.length !== 1
							? {
									gridTemplateColumns: `repeat(${columns}, 1fr)`,
								}
							: undefined
					}
				>
					{documents?.map((document, key) => (
						<li key={key}>
							<Document
								columns={columns}
								name={document.name}
								file={document.file}
								alternativeText={document.alternativeText}
								direction={fileDirection}
								lineClamp={lineClamp}
								variant={variant}
							/>
						</li>
					))}
				</ul>
			)}
		</Container>
	);
};
