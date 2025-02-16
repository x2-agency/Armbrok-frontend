/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { ExchangesItemType } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

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
		<Container category="article" padding="min" className={css.root}>
			<img src={logo?.url} alt="icon" className={css.icon} />
			<header className={css.header}>
				<h3 className={cx(css.title, { [css.greyTitle]: withGreyTitle })}>
					{parser(name ?? '')}
				</h3>
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
				{country && (
					<div className={css.flag}>
						<img src={country.flag?.url} alt="icon" className={css.flagIcon} />
						<p className={css.countryName}>{parser(country.name)}</p>
					</div>
				)}
			</header>
		</Container>
	);
};
