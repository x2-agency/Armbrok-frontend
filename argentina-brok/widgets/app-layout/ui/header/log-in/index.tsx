import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';
export const LogIn = () => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);

	return (
		<div className={css.root}>
			<Button className={css.button} variant="filled" href="/">
				{t(`${header.openAccountButton.root}.text`)}
			</Button>
		</div>
	);
};
