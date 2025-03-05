import { useEffect } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';

export const useUpdateFooterData = (publishedAt: string | undefined) => {
	const { setFooterData } = useLayoutContext();

	useEffect(() => {
		if (publishedAt) {
			setFooterData({ publishedAt });
		}
	}, [publishedAt, setFooterData]);
};
