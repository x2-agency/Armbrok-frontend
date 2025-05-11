'use client';

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
	const { toggleAccountModalOpen, headerFundsDropdownItems } =
		useLayoutContext();

	return (
		<Container className={css.root}>
			<nav className={css.links}>
				<li className={css.li}>
					<BurgerLinks className={css.services} rootKey="servicesLinks" />
				</li>
				{headerFundsDropdownItems && headerFundsDropdownItems.length > 0 && (
					<li className={css.li}>
						<BurgerLinks rootKey="fundsLinks" withLayoutContext />
					</li>
				)}
				<li className={css.li}>
					<BurgerLinks rootKey="aboutUsLinks" />
				</li>
				{links.map((link, index) => (
					<li key={index} className={css.li}>
						<Button variant="subtle" href={link.href} className={css.button}>
							{link.label}
						</Button>
					</li>
				))}
			</nav>
			<div className={css.buttons}>
				<Button
					onClick={() => toggleAccountModalOpen(true)}
					variant="filled"
					category="big"
					className={css.account}
				>
					{t(`${header.openAccountButton.root}.text`)}
				</Button>
			</div>
		</Container>
	);
};
