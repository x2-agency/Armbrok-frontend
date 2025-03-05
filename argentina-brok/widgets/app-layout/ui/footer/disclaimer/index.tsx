'use client';

import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { LOCALE_KEYS } from '@/i18n/locale-keys';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { useFormattedDate } from '@/widgets/app-layout/hooks/use-formated-date';

import css from './index.module.css';

export const Disclaimer = () => {
	const { footer } = LOCALE_KEYS;
	const t = useTranslations(footer.root);

	const disclaimerContent = t.markup(footer.disclaimer, {
		p: chunks => `<p class="${css.text}">${chunks}</p>`,
	});

	const lastUpdateLabel = t(footer.updateLabel);
	const { footerData } = useLayoutContext();

	const formattedDate = useFormattedDate(footerData?.publishedAt ?? '');

	return (
		<>
			<div className={css.root}>{parser(disclaimerContent)}</div>
			{footerData.publishedAt && (
				<time className={css.time}>
					{`${lastUpdateLabel} ${formattedDate}`}
				</time>
			)}
		</>
	);
};
