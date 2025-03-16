import parser from 'html-react-parser';

import { useSuccessAccountTranslations } from '@/widgets/app-layout/hooks/use-success-account-translations';

import css from './index.module.css';

export const SuccessForm = () => {
	const { title, description } = useSuccessAccountTranslations();

	return (
		<div className={css.success}>
			<h4 className={css.successTitle}>{parser(title)}</h4>
			<p className={css.successDescription}>{parser(description)}</p>
		</div>
	);
};
