import css from './index.module.css';
import { Paragraph } from './paragraph';

type TooltipContentProps = {
	date: string;
	unitPrice: number;
	nav?: number | null;
	bankDeposit?: number | null;
};

export const CustomTooltipContent = ({
	date,
	unitPrice,
	nav,
	bankDeposit,
}: TooltipContentProps) => {
	return (
		<ul className={css.root}>
			{bankDeposit && (
				<li className={css.paragraph}>
					<Paragraph
						leftPart="Bank deposit"
						rightPart={bankDeposit.toFixed(2)}
					/>
				</li>
			)}
			{nav && (
				<li className={css.paragraph}>
					<Paragraph leftPart="NAV" rightPart={nav.toFixed(2)} />
				</li>
			)}
			<li className={css.paragraph}>
				<Paragraph
					leftPart="Unit price"
					rightPart={'$' + unitPrice.toFixed(2)}
				/>
			</li>
			<li className={css.paragraph}>
				<Paragraph leftPart="Date" rightPart={date} />
			</li>
		</ul>
	);
};
