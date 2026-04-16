import cx from 'clsx';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const LogIn = ({ className }: { className?: string }) => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();
	const pathname = usePathname();
	const isHyLocale = pathname.startsWith('/hy');

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

	return (
		<div className={cx(css.root, className)}>
			<Button
				className={cx(css.button, { [css.hy]: isHyLocale })}
				variant="filled"
				onClick={() => handleClick(t(`${header.openAccountButton.root}.text`))}
			>
				{t(`${header.openAccountButton.root}.text`)}
			</Button>
		</div>
	);
};
