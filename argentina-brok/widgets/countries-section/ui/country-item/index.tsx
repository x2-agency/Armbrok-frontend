/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { FlagType } from '@/shared/types/global.types';

import css from './index.module.css';

export const CountryItem = ({ name, flag }: FlagType) => {
	return (
		<article className={css.root}>
			{flag && <img src={flag?.url} alt="country" className={css.image} />}
			{name && <h4 className={css.title}>{parser(name)}</h4>}
		</article>
	);
};
