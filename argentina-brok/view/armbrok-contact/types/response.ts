import type {
	BaseResponse,
	ContactCardItem,
	ContactForm,
	ItemDetail,
} from '@/shared/types/global.types';

export type ArmbrokContactPageData = ItemDetail & {
	contactCards?: Array<ContactCardItem>;
	contactForm?: ContactForm;
};

export type ArmbrokContactPageResponse = BaseResponse<ArmbrokContactPageData>;
