'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { BurgerLinks } from '@/widgets/app-layout/ui/burger-links';

import css from './index.module.css';

export const MenuBody = () => {
	const { header } = LOCALE_KEYS;
	const t = useTranslations(header.root);
	const { toggleAccountModalOpen, setSubjectForm, siteLinks } =
		useLayoutContext();
	const headerLinks = siteLinks?.header ?? [];

	const handleButtonClick = (text: string) => {
		setSubjectForm(text);
		toggleAccountModalOpen(true);
	};

	return (
		<Container className={css.root}>
			<nav className={css.links}>
				{headerLinks.map(item => {
					const inner = item.innerLinks ?? [];
					if (inner.length > 0) {
						return (
							<li key={item.id} className={css.li}>
								<BurgerLinks
									className={css.services}
									label={item.text ?? ''}
									items={inner}
								/>
							</li>
						);
					}

					const href = item.slug ? `/${item.slug}` : '#';
					return (
						<li key={item.id} className={css.li}>
							<Button variant="subtle" href={href} className={css.button}>
								{parser(item.text ?? '')}
							</Button>
						</li>
					);
				})}
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
