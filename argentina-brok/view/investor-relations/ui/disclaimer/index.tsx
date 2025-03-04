import parser from 'html-react-parser';

import css from './index.module.css';

type DisclaimerProps = {
	disclaimerMarkup?: string;
};

export const Disclaimer = ({ disclaimerMarkup }: DisclaimerProps) => {
	if (!disclaimerMarkup) {
		return null;
	}

	return <section className={css.root}>{parser(disclaimerMarkup)}</section>;
};
