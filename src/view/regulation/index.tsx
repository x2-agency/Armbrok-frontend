'use client';

import parser from 'html-react-parser';
import type { NextPage } from 'next';

import { FileSection } from '@/widgets/file-section';
import { InternalRules } from '@/widgets/internal-rules';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { RegulationPageData } from './types/response';

export const Regulation: NextPage<RegulationPageData> = ({
	title,
	stockExchangeRules,
	laws,
	regulationsFile,
	internalRules,
}) => {
	return (
		<div className={css.root}>
			{title && <h1 className={css.title}>{parser(title)}</h1>}
			<InternalRules
				internalRules={internalRules}
				className={css.internalRules}
			/>

			<StatutoryDocuments
				className={css.laws}
				documentsSection={laws}
				columns={1}
				lineClamp={1}
				variant="link"
			/>
			<FileSection
				title={stockExchangeRules?.title}
				description={stockExchangeRules?.description}
				documents={stockExchangeRules?.documents ?? []}
				enabled={stockExchangeRules?.enabled}
				regulationsFile={regulationsFile}
				variant="link"
				linkLabel={stockExchangeRules?.linkLabel}
			/>
		</div>
	);
};
