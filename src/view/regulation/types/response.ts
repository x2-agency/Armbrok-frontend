import type {
	BaseResponse,
	DocumentsSectionProps,
	ParentFundProps,
} from '@/shared/types/global.types';

export type RegulationPageData = {
	pageTitle?: string;
	documentsSection?: DocumentsSectionProps;
	rulesDocumentsSection?: DocumentsSectionProps;
	parentFunds?: Array<ParentFundProps>;
};

export type RegulationPageResponse = BaseResponse<RegulationPageData>;
