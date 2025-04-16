import parser from 'html-react-parser';
import type { NextPage } from 'next';

// import { TitleSection } from '@/shared/ui/title-section';
import { FileSection } from '@/widgets/file-section';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { RegulationPageData } from './types/response';

export const Regulation: NextPage<RegulationPageData> = ({
	pageTitle,
	documentsSection,
	rulesDocumentsSection,
}) => {
	return (
		<div className={css.root}>
			{pageTitle && <h1 className={css.title}>{parser(pageTitle)}</h1>}
			<StatutoryDocuments
				documentsSection={rulesDocumentsSection}
				columns={2}
				lineClamp={1}
			/>
			{/* <TitleSection
				className={css.titleSection}
				title={documentsSection?.title ?? ''}
				description={documentsSection?.description}
			/> */}
			<FileSection documents={documentsSection?.documents ?? []} />
		</div>
	);
};
