import parser from 'html-react-parser';

import css from './index.module.css';

type DisclaimerProps = {
	title?: string;
	description?: string;
};

export const Disclaimer = ({ title, description }: DisclaimerProps) => {
	if (!(title && description)) {
		return null;
	}
	return (
		<section className={css.root}>
			<h3 className={css.title}>{title ?? ''}</h3>
			{parser(description)}
		</section>
	);
};
