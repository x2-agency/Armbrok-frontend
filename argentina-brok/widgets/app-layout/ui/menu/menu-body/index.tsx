'use client';

import cx from 'clsx';
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
	const { toggleAccountModalOpen } = useLayoutContext();

	return (
		<Container className={css.root}>
			<nav className={css.links}>
				<div className={cx(css.li)}>
					<BurgerLinks className={css.services} rootKey="servicesLinks" />
				</div>
				{links.map((link, index) => (
					<Button
						variant="subtle"
						href={link.href}
						key={index}
						className={css.button}
					>
						{link.label}
					</Button>
				))}
			</nav>
			<ul className={css.buttons}>
				<Button
					onClick={() => toggleAccountModalOpen(true)}
					variant="filled"
					category="big"
					className={css.account}
				>
					{t(`${header.openAccountButton.root}.text`)}
				</Button>
			</ul>
		</Container>
	);
};
