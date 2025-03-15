import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const LogIn = () => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

	return (
		<div className={css.root}>
			<Button
				className={css.button}
				variant="filled"
				onClick={() => handleClick(t(`${header.openAccountButton.root}.text`))}
			>
				{t(`${header.openAccountButton.root}.text`)}
			</Button>
		</div>
	);
};
