import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const NavigationColumn = () => {
	const { footer } = LOCALE_KEYS;
	const t = useTranslations(`${footer.root}.${footer.links.root}`);

	return (
		<nav className={css.root}>
			{footer.links.items.map((item, index) => (
				<div key={index} className={css.column}>
					<Button variant="subtle" href={item.root ?? ''} className={css.title}>
						{parser(t(`${item.root}.text`))}
					</Button>
					<ul className={css.list}>
						{item.items?.map((link, index) => (
							<li key={index}>
								<Button
									variant="subtle"
									href={t(`${item.root}.${link}.link`)}
									className={css.listItem}
								>
									{parser(t(`${item.root}.${link}.text`))}
								</Button>
							</li>
						))}
					</ul>
				</div>
			))}
		</nav>
	);
};
