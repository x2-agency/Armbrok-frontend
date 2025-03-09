import { useMemo } from 'react';

const getTimeAgo = (timeDifferenceInMs: number) => {
	const timeDifferenceInMinutes = Math.floor(timeDifferenceInMs / (1000 * 60));
	const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
	const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);

	if (timeDifferenceInMinutes < 60) {
		return `${timeDifferenceInMinutes} min`;
	} else if (timeDifferenceInHours < 24) {
		return `${timeDifferenceInHours}h`;
	} else if (timeDifferenceInDays < 7) {
		return `${timeDifferenceInDays} day${timeDifferenceInDays > 1 ? 's' : ''}`;
	} else if (timeDifferenceInDays < 30) {
		const weeks = Math.floor(timeDifferenceInDays / 7);
		return `${weeks} week${weeks > 1 ? 's' : ''}`;
	} else if (timeDifferenceInDays < 365) {
		const months = Math.floor(timeDifferenceInDays / 30);
		return `${months} month${months > 1 ? 's' : ''}`;
	} else {
		const years = Math.floor(timeDifferenceInDays / 365);
		return `${years} year${years > 1 ? 's' : ''}`;
	}
};

export const useFormattedDate = (
	dateString: string | undefined,
	useAlternateFormat: boolean = false,
	includeTimeAgo: boolean = false
) => {
	return useMemo(() => {
		if (!dateString) return null;

		const publicationDate = new Date(dateString);
		const currentDate = new Date();

		let formattedDate;

		if (useAlternateFormat) {
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

		if (includeTimeAgo) {
			const timeDifferenceInMs =
				currentDate.getTime() - publicationDate.getTime();
			const timeAgo = getTimeAgo(timeDifferenceInMs);
			return `${formattedDate} • ${timeAgo} read`;
		}

		return formattedDate;
	}, [dateString, useAlternateFormat, includeTimeAgo]);
};
