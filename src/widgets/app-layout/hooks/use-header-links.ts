import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { LOCALE_KEYS } from '@/i18n/locale-keys';

export const useHeaderLinks = () => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);

	return useMemo(
		() =>
			header.items.map(item => ({
				label: t(`${item}.text`),
				href: t(`${item}.link`),
			})),
		[header.items, t]
	);
};
