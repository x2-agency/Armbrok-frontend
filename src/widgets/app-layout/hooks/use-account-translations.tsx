import { useTranslations } from 'next-intl';

export const useAccountTranslations = () => {
	const t = useTranslations('openAccount');

	const accountTranslations = {
		titleTranslation: t('title'),
		nameInputTranslation: {
			label: t('nameInput.label'),
			placeholder: t('nameInput.placeholder'),
			errorMessage: t('nameInput.errorMessage'),
			secondErrorMessage: t('nameInput.secondErrorMessage'),
		},
		phoneInputTranslation: {
			label: t('phoneInput.label'),
			placeholder: t('phoneInput.placeholder'),
			errorMessage: t('phoneInput.errorMessage'),
			secondErrorMessage: t('phoneInput.secondErrorMessage'),
		},
		emailInputTranslation: {
			label: t('emailInput.label'),
			placeholder: t('emailInput.placeholder'),
			errorMessage: t('emailInput.errorMessage'),
			secondErrorMessage: t('emailInput.secondErrorMessage'),
		},
		subjectInputTranslation: {
			label: t('subjectInput.label'),
			placeholder: t('subjectInput.placeholder'),
			errorMessage: t('subjectInput.errorMessage'),
			secondErrorMessage: t('subjectInput.secondErrorMessage'),
			value: t('subjectInput.value'),
		},
		messageInputTranslation: {
			label: t('messageInput.label'),
			placeholder: t('messageInput.placeholder'),
			errorMessage: t('messageInput.errorMessage'),
			secondErrorMessage: t('messageInput.secondErrorMessage'),
		},
		captchaTranslation: t('captcha'),
		buttonTranslation: t('button'),
	};

	return accountTranslations;
};
