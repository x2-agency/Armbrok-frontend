import type {
	BaseResponse,
	DocumentsSectionProps,
	MediaData,
} from '@/shared/types/global.types';
import type { InternalRulesType } from '@/widgets/internal-rules';

export type RegulationPageData = {
	title?: string;
	regulationsFile?: MediaData;
	stockExchangeRules?: DocumentsSectionProps;
	laws?: DocumentsSectionProps;
	internalRules?: InternalRulesType;
};

export type RegulationPageResponse = BaseResponse<RegulationPageData>;
