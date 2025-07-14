import type {
	SliderItem,
	SliderItemWithText,
} from '@/shared/types/global.types';

export type SliderSectionProps = {
	title?: string;
	description?: string;
	slider?: SliderItem | Array<SliderItemWithText>;
};
