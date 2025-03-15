import parser from 'html-react-parser';

import { SUCCESS_FORM } from '@/widgets/app-layout/model/account-form.constants';

import css from './index.module.css';

export const SuccessForm = () => {
	return (
		<div className={css.success}>
			<h4 className={css.successTitle}>{parser(SUCCESS_FORM.title)}</h4>
			<p className={css.successDescription}>
				{parser(SUCCESS_FORM.description)}
			</p>
		</div>
	);
};
