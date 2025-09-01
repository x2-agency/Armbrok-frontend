import cx from 'clsx';

import css from './index.module.css';

export const ShareholdersGraph = () => {
	return (
		<div className={css.root}>
			<div className={css.firstGroup}>
				<div className={cx(css.card)}>Shareholders Meeting</div>
				<div className={cx(css.card, css.internal)}>Internal Audit</div>
				<div className={cx(css.card)}>Chief Executive Officer</div>
			</div>
			<div className={css.secondGroup}>
				<div className={css.secondGroup}>
					<div>
						<div className={cx(css.card)}>Internal Markets</div>
						<div>
							<div className={cx(css.card)}>Brokerage</div>
							<div className={cx(css.card)}>Asset Management</div>
							<div className={cx(css.card)}>Prop. Trading</div>
							<div className={cx(css.card)}>Research</div>
						</div>
					</div>
					<div>
						<div className={cx(css.card)}>Local Markets</div>
						<div>
							<div className={cx(css.card)}>Brokerage</div>
							<div className={cx(css.card)}>Asset Management</div>
							<div className={cx(css.card)}>Prop. Trading</div>
							<div className={cx(css.card)}>Research</div>
							<div className={cx(css.card)}>Investment Banking</div>
							<div className={cx(css.card)}>Advisory</div>
						</div>
					</div>
				</div>
				<div>
					<div>
						<div className={cx(css.card)}>Operations</div>
						<div>
							<div className={cx(css.card)}>Back Office</div>
							<div className={cx(css.card)}>Middle Office</div>
						</div>
					</div>
					<div>
						<div className={cx(css.card)}>Depository</div>
						<div>
							<div className={cx(css.card)}>Custody</div>
							<div className={cx(css.card)}>Settlements</div>
							<div className={cx(css.card)}>Registrar</div>
						</div>
					</div>
				</div>
				<div>
					<div className={cx(css.card)}>Finance</div>
					<div>
						<div className={cx(css.card)}>Treasury</div>
						<div className={cx(css.card)}>Accounting</div>
						<div className={cx(css.card)}>Onboarding</div>
					</div>
				</div>
			</div>
			<div>
				<div className={cx(css.card)}>IT</div>
				<div className={cx(css.card)}>Digital Productions</div>
				<div className={cx(css.card)}>Marketing</div>
				<div className={cx(css.card)}>HR</div>
			</div>
		</div>
	);
};
