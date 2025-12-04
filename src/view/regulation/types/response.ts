import type {
	BaseResponse,
	DocumentsSectionProps,
	MediaData,
	ParentFundProps,
} from '@/shared/types/global.types';

export type RegulationPageData = {
	pageTitle?: string;
	regulationsFile?: MediaData;
	documentsSection?: DocumentsSectionProps;
	rulesDocumentsSection?: DocumentsSectionProps;
	parentFunds?: Array<ParentFundProps>;
};

export type RegulationPageResponse = BaseResponse<RegulationPageData>;
