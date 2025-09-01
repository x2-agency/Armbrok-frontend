import type { TreeItem } from '@/shared/types/global.types';

export const sortTreeLevels = (
	departments?: Array<TreeItem>
): Record<number, Array<TreeItem>> => {
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
		{} as Record<number, Array<TreeItem>>
	);
};
