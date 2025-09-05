import type { StructureTreeProps } from '@/shared/types/global.types';

export const sortTreeLevels = (
	departments?: Array<StructureTreeProps>
): Record<number, Array<StructureTreeProps>> => {
	if (!departments) return {};

	return departments.reduce(
		(acc, department) => {
			const { level } = department;
			if (!acc[level]) {
				acc[level] = [];
			}
			acc[level].push(department);
			return acc;
		},
		{} as Record<number, Array<StructureTreeProps>>
	);
};
