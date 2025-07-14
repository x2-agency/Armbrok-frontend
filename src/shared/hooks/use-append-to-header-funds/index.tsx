'use client';

import { useEffect } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import type { ParentFundProps } from '@/shared/types/global.types';

type UseAppendToHeaderFundsProps = {
	funds?: Array<ParentFundProps>;
};

export const useAppendToHeaderFunds = ({
	funds,
}: UseAppendToHeaderFundsProps) => {
	const { setHeaderFundsDropDownItems } = useLayoutContext();

	useEffect(() => {
		if (funds && funds.length > 0) {
			const headerFundsItems = funds?.map(item => ({
				title: item.title ?? '',
				slug: item.slug,
			}));

			setHeaderFundsDropDownItems(headerFundsItems);
		} else {
			setHeaderFundsDropDownItems(null);
		}
	}, [funds, setHeaderFundsDropDownItems]);
};
