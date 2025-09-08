'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import type { ClientRightsPageResponse } from '@/shared/types/client-rights';
import ContentMarkup from '@/shared/ui/content-markup';

import css from './index.module.css';

export const ClientRights: NextPage<{
	initialData?: ClientRightsPageResponse;
}> = ({ initialData }) => {
	if (!initialData?.data) {
		throw new Error();
	}

	const { content, title, publishedAt } = initialData?.data ?? {};

	useUpdateFooterData(publishedAt);
	return (
		<>
			<h1 className={css.title}>{title}</h1>
			<ContentMarkup extraClass={css.markup} html={content} />
		</>
	);
};
