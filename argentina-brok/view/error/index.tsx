import css from './index.module.css';
import {
	SOMETHING_WRONG_DATA,
	NOT_FOUND_DATA,
} from './model/error-page.constants';
import { ErrorArticle } from './ui/error-article';
export type ErrorProps = {
	statusCode: number;
};

export const Error = ({ statusCode }: ErrorProps) => {
	const errorData = statusCode === 404 ? NOT_FOUND_DATA : SOMETHING_WRONG_DATA;

	return (
		<div className={css.errorWrap}>
			<ErrorArticle {...errorData} />
		</div>
	);
};
