import parser from 'html-react-parser';

import type { PostFormSuccessResponseType } from '@/shared/types/global.types';

import css from './index.module.css';

export const SuccessForm = ({ message }: PostFormSuccessResponseType) => {
	if (!message) return null;

	return (
		<div className={css.success}>
			{message.title && (
				<h4 className={css.successTitle}>{parser(message.title)}</h4>
			)}
			{message.description && (
				<p className={css.successDescription}>{parser(message.description)}</p>
			)}
		</div>
	);
};
