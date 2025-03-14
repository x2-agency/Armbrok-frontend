import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const LogIn = () => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);
	const { toggleAccountModalOpen } = useLayoutContext();

	return (
		<div className={css.root}>
			<Button
				className={css.button}
				variant="filled"
				onClick={() => toggleAccountModalOpen(true)}
			>
				{t(`${header.openAccountButton.root}.text`)}
			</Button>
		</div>
	);
};
