import type {
	BaseResponse,
	DocumentsSectionProps,
	MediaData,
} from '@/shared/types/global.types';

export type RegulationPageData = {
	pageTitle?: string;
	regulationsFile?: MediaData;
	documentsSection?: DocumentsSectionProps;
	rulesDocumentsSection?: DocumentsSectionProps;
};

export type RegulationPageResponse = BaseResponse<RegulationPageData>;
