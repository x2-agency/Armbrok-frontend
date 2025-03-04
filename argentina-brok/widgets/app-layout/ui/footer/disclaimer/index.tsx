import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { LAST_UPDATE } from '@/widgets/app-layout/models/text-block.constants';

import css from './index.module.css';

export const Disclaimer = () => {
	const { footer } = LOCALE_KEYS;
	const t = useTranslations(footer.root);

	const disclaimerContent = t.markup(footer.disclaimer, {
		p: chunks => `<p class="${css.text}">${chunks}</p>`,
	});

	const lastUpdateLabel = t(footer.updateLabel);

	return (
		<>
			<div className={css.root}>{parser(disclaimerContent)}</div>
			<time className={css.time}>{`${lastUpdateLabel} ${LAST_UPDATE}`}</time>
		</>
	);
};
