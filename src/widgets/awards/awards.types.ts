import type { Award } from '@/shared/types/global.types';

export type AwardSectionProps = {
	awards?: Array<Award>;
	title?: string;
	className?: string;
};
