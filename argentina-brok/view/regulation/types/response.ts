import type {
	BaseResponse,
	DocumentsSectionProps,
} from '@/shared/types/global.types';

export type RegulationPageData = {
	pageTitle?: string;
	documentsSection?: DocumentsSectionProps;
	rulesDocumentsSection?: DocumentsSectionProps;
};

export type RegulationPageResponse = BaseResponse<RegulationPageData>;
