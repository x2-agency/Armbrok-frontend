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
	description,
}: MembershipCardProps) => {
	return (
		<article className={cx(css.root, 'p-32')}>
			{logo?.url && (
				<img
					src={logo.url}
					alt=""
					className={css.icon}
					loading="lazy"
				/>
			)}
			<div className={css.header}>
				<h3 className={cx(css.title, { [css.greyTitle]: withGreyTitle })}>
					{parser(name ?? '')}
				</h3>
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
				{country && (
					<div className={css.flag}>
						{country.flag?.url && (
							<img
								src={country.flag.url}
								alt=""
								className={css.flagIcon}
								loading="lazy"
							/>
						)}
						<p className={css.countryName}>{parser(country.name)}</p>
					</div>
				)}
			</div>
		</article>
	);
};
