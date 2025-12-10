import { useTranslations } from 'next-intl';
import { useCallback, useMemo } from 'react';


export const useFormattedDate = (
	dateString: string | undefined,
	options: {
		readTimeInMinutes?: number | null,
		useAlternateFormat?: boolean,
	} = { useAlternateFormat: false }
) => {
	const t = useTranslations('words');

	const getReadTime = useCallback((readTime: number) => {
		if (readTime >= 60) {
			const hours = readTime / 60;

			let word = t('hour');

			if (hours > 1) {
				word = t('hours');
			}

			return `${hours} ${word}`
		}

		return `${readTime} ${t('minShort')}`;
	}, [t]);

	return useMemo(() => {
		if (!dateString) return null;

		const publicationDate = new Date(dateString);
		let formattedDate;

		if (options.useAlternateFormat) {
			formattedDate = publicationDate.toLocaleString('en-GB', {
				day: '2-digit',
				month: 'short',
				year: 'numeric',
			});
		} else {
			formattedDate = publicationDate
				.toLocaleString('ru-RU', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				})
				.replace(',', '');
		}

		if (options.readTimeInMinutes) {
			return `${formattedDate} • ${getReadTime(options.readTimeInMinutes)} ${t('read')}`;
		}

		return formattedDate;
	}, [dateString, getReadTime, options.readTimeInMinutes, options.useAlternateFormat, t]);
};
