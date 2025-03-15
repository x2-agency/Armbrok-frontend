import { useTranslations } from 'next-intl';

export const useSuccessAccountTranslations = () => {
	const t = useTranslations('successAccountModal');

	return {
		title: t('title'),
		description: t('description'),
	};
};
