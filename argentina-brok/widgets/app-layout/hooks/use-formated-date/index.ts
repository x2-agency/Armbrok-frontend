import { useMemo } from 'react';

export const useFormattedDate = (dateString: string | undefined) => {
	return useMemo(() => {
		if (!dateString) return null;

		return new Date(dateString)
			.toLocaleString('ru-RU', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
			})
			.replace(',', '');
	}, [dateString]);
};
