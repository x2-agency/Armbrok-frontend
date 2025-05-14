'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { MenuBodyProps } from '@/widgets/app-layout/types/menu.types';
import { BurgerLinks } from '@/widgets/app-layout/ui/burger-links';

import css from './index.module.css';

export const MenuBody = ({ links }: MenuBodyProps) => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();
	const translation = useTranslations('fundsLinks');

	const handleButtonClick = (text: string) => {
		setSubjectForm(text);
		toggleAccountModalOpen(true);
	};

	return (
		<Container className={css.root}>
			<nav className={css.links}>
				<li className={css.li}>
					<BurgerLinks className={css.services} rootKey="servicesLinks" />
				</li>
				<li className={css.li}>
					<Button href={'/funds'} className={cx(css.link)} variant="subtle">
						{parser(translation('text'))}
					</Button>
				</li>
				<li className={css.li}>
					<BurgerLinks rootKey="aboutUsLinks" />
				</li>
				{links.map((link, index) => (
					<li key={index} className={css.li}>
						<Button variant="subtle" href={link.href} className={css.button}>
							{parser(link.label)}
						</Button>
					</li>
				))}
			</nav>
			<div className={css.buttons}>
				<Button
					onClick={() =>
						handleButtonClick(t(`${header.openAccountButton.root}.text`))
					}
					variant="filled"
					category="big"
					className={css.account}
				>
					{parser(t(`${header.openAccountButton.root}.text`))}
				</Button>
			</div>
		</Container>
	);
};
