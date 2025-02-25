import parser from 'html-react-parser';

import css from './index.module.css';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { SEARCH_FORM_NULL_DATA } from '@/view/armbrok-search/models/form.constants';

type SearchFormProps = {
	inputPlaceholder?: string;
	searchButtonText?: string;
};

export const SearchForm = ({
	inputPlaceholder,
	searchButtonText,
}: SearchFormProps) => {
	return (
		<form className={css.root}>
			<Input
				className={css.input}
				placeholder={inputPlaceholder ?? SEARCH_FORM_NULL_DATA.placeholder}
				type="text"
				leftIcon={SEARCH_FORM_NULL_DATA.icon}
			/>
			<Button variant="filled" className={css.button}>
				{parser(searchButtonText ?? SEARCH_FORM_NULL_DATA.buttonText)}
			</Button>
		</form>
	);
};
