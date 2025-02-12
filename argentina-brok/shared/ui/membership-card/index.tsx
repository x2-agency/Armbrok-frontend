/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { ExchangesItemType } from '@/shared/types/global.types';

import css from './index.module.css';

export type MembershipCardProps = ExchangesItemType & {
	withGreyTitle?: boolean;
};

export const MembershipCard = ({
	withGreyTitle,
	name,
	country,
	logo,
}: MembershipCardProps) => {
	return (
		<article className={css.root}>
			<img src={logo?.url} alt="icon" className={css.icon} />
			<header className={css.header}>
				<h3 className={cx(css.title, { [css.greyTitle]: withGreyTitle })}>
					{parser(name ?? '')}
				</h3>
				<p className={css.description}>{}</p>
				<img src={country.flag?.url} alt="icon" className={css.icon} />
			</header>
		</article>
	);
};
