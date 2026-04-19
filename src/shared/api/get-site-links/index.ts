import apiClient from '@/shared/api/api-client';
import type { BaseResponse } from '@/shared/types/global.types';

export type SiteLinkInner = {
	id: number;
	text: string;
	slug: string | null;
};

export type SiteLinkGroup = {
	id: number;
	text: string;
	slug: string | null;
	innerLinks: SiteLinkInner[];
};

export type SiteLinksData = {
	footer: SiteLinkGroup[];
	header: SiteLinkGroup[];
};

export type GetSiteLinksType = BaseResponse<SiteLinksData>;

export const getSiteLinks = async (): Promise<
	GetSiteLinksType | undefined
> => {
	try {
		const response = await apiClient.get('/site-links');

		return response.data;
	} catch (error) {
		console.error(error);

		return;
	}
};
