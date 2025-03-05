import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import css from './index.module.css';
import { ErrorArticle } from './ui/error-article';

export type ErrorProps = {
	statusCode: number;
};

type ErrorButtonType = {
	text: string;
	href: string;
};

type LocaleLabel = 'serverError' | 'notFound';

export const Error = ({ statusCode }: ErrorProps) => {
	const localeLabel: LocaleLabel =
		statusCode === 404 ? 'notFound' : 'serverError';
	const t = useTranslations(localeLabel);

	const [buttonData, setButtonData] = useState<ErrorButtonType | undefined>(
		undefined
	);

	useEffect(() => {
		if (statusCode !== 404 || localeLabel !== 'notFound') return;

		const button = {
			text: t('button.text'),
			href: t('button.link'),
		};

		setButtonData(button);
	}, [localeLabel, statusCode, t]);

	return (
		<div className={css.errorWrap}>
			<ErrorArticle
				title={t('title')}
				description={t('description')}
				button={buttonData}
			/>
		</div>
	);
};
