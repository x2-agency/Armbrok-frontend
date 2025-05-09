import type {
	BaseResponse,
	ContactCardItem,
	ContactForm,
	ItemDetail,
	Cords,
	ParentFundProps,
} from '@/shared/types/global.types';

export type ArmbrokContactPageData = ItemDetail & {
	contactCards?: Array<ContactCardItem>;
	contactForm?: ContactForm;
	mapCoords?: Cords;
	parentFunds?: Array<ParentFundProps>;
};

export type ArmbrokContactPageResponse = BaseResponse<ArmbrokContactPageData>;
