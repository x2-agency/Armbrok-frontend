import cx from 'clsx';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { MenuBodyProps } from '@/widgets/app-layout/types/menu.types';
import { ServicesLinks } from '@/widgets/app-layout/ui/services-links';

import css from './index.module.css';

export const MenuBody = ({ links }: MenuBodyProps) => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);

	return (
		<Container className={css.root}>
			<nav className={css.links}>
				<div className={cx(css.li)}>
					<ServicesLinks />
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
				{/* <Button
					href="https://example.com/"
					variant="subtle"
					className={css.login}
				>
					{t(`${header.loginButton.root}.text`)}
				</Button> */}
				<Button
					href="https://example.com/"
					variant="filled"
					category="default"
					className={css.account}
				>
					{t(`${header.openAccountButton.root}.text`)}
				</Button>
			</ul>
		</Container>
	);
};
