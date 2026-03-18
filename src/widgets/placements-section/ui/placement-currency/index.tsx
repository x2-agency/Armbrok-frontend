/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';

import css from './index.module.css';

export type PlacementCurrencyType = {
	amount?: string;
	currency?: 'usd' | 'amd';
	label?: string;
};

export type PlacementCurrencyProps = {
	data: Array<PlacementCurrencyType>;
};

export const PlacementCurrency = ({ data }: PlacementCurrencyProps) => {
	const currencyIcons: Record<'usd' | 'amd', string> = {
		usd: '/assets/icon/currency/usd.svg',
		amd: '/assets/icon/currency/amd.svg',
	};

	const formatNumber = (num?: number) =>
		num !== undefined ? num.toLocaleString('en-US') : '';

	return (
		<ul className={cx(css.root, { [css.newRoot]: data.length === 1 })}>
			{data.map((item, index) => {
				const { amount, currency, label } = item;
				const currencySvg = currency ? currencyIcons[currency] : undefined;

				return (
					<li key={index} className={css.wrap}>
						<div className={css.amountWrap}>
							<h4 className={css.amount}>{formatNumber(Number(amount))}</h4>
							{currencySvg && (
								<img
									className={css.currencySvg}
									src={currencySvg}
									alt={`${currency} currency`}
								/>
							)}
						</div>
						<p className={css.label}>{label}</p>
					</li>
				);
			})}
		</ul>
	);
};
