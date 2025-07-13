'use client';

import parser from 'html-react-parser';
import type { NextPage } from 'next';

import { useAppendToHeaderFunds } from '@/shared/hooks/use-append-to-header-funds';
import { FileSection } from '@/widgets/file-section';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { RegulationPageData } from './types/response';

export const Regulation: NextPage<RegulationPageData> = ({
	pageTitle,
	documentsSection,
	rulesDocumentsSection,
	parentFunds,
}) => {
	useAppendToHeaderFunds({ funds: parentFunds });

	return (
		<div className={css.root}>
			{pageTitle && <h1 className={css.title}>{parser(pageTitle)}</h1>}
			<StatutoryDocuments
				documentsSection={rulesDocumentsSection}
				columns={2}
				lineClamp={1}
			/>
			<FileSection
				title={documentsSection?.title}
				description={documentsSection?.description}
				documents={documentsSection?.documents ?? []}
				enabled={documentsSection?.enabled}
			/>
		</div>
	);
};
