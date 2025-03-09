import type {
	BaseResponse,
	ContactCardItem,
	ContactForm,
	ItemDetail,
	Cords,
} from '@/shared/types/global.types';

export type ArmbrokContactPageData = ItemDetail & {
	contactCards?: Array<ContactCardItem>;
	contactForm?: ContactForm;
	mapCoords?: Cords;
};

export type ArmbrokContactPageResponse = BaseResponse<ArmbrokContactPageData>;
