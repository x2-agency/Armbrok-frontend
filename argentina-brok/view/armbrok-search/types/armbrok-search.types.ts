import type { ItemDetail } from '@/shared/types/global.types';

export type ArmbrokSearchPageResponse = ItemDetail & {
    inputPlaceholder?: string;
    searchButtonText?: string;
};
