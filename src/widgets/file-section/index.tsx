import cx from 'clsx';
import parser from 'html-react-parser';

import type {
	DocumentsSectionProps,
	MediaData,
} from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { Document } from '@/shared/ui/document';

import css from './index.module.css';
import { DocumentFile } from './ui/document-file';

// import { Document } from './ui/document';

type FileSectionProps = DocumentsSectionProps & {
	className?: string;
	enabled?: boolean;
	regulationsFile?: MediaData;
};

export const FileSection = ({
	title,
	description,
	className,
	documents,
	enabled,
	regulationsFile,
}: FileSectionProps) => {
	if (!documents || documents.length === 0) {
		return null;
	}

	console.log(documents);

	return (
		<Container className={cx(css.root, className)}>
			<div className={css.wrap}>
				<h2 className={css.title}>{parser(title ?? '')}</h2>
				<Document
					className={css.regulationFile}
					file={
						regulationsFile?.url
							? {
									url: regulationsFile.url,
									size: regulationsFile.size,
									ext: regulationsFile.ext,
								}
							: undefined
					}
					alternativeText={regulationsFile?.alternativeText}
				/>
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
							url={document.file?.url ?? ''}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
