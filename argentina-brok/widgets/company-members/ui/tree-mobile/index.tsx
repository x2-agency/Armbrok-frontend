import cx from 'clsx';

import css from './index.module.css';

export const TreeMobile = () => {
	return (
		<article className={css.root}>
			<div className={css.topElement}>General Meeting of Shareholders</div>
			<div className={css.topElement}>
				<div className={css.circleTop} />
				Chief Executive Officer
			</div>
			<div className={css.body}>
				<div className={css.left}>
					<div className={css.element}>
						<div className={css.circleTop} />
						Investment
						<br /> banking
					</div>
					<div className={css.element}>
						<div className={css.circleTop} />
						Asset
						<br /> management
					</div>
					<div className={cx(css.element, css.leftArrow)}>
						<div className={css.circleTop} />
						<div className={css.circleLeft} />
						Securities
						<br />
						trading
					</div>
					<div className={css.element}>
						<div className={css.circleTop} />
						Consulting
					</div>
					<div className={css.element}>
						<div className={css.circleTop} />
						International
						<br />
						projects
					</div>
					<div className={css.element}>
						<div className={css.circleTop} />
						Research
						<br />& analysis
					</div>
					<div className={cx(css.element, css.leftArrow)}>
						<div className={css.circleTop} />
						<div className={css.circleLeft} />
						Depositary
						<br /> services
					</div>
					<div className={css.element}>
						<div className={css.circleTop} />
						Accounting
					</div>
					<div className={css.element}>
						<div className={css.circleTop} />
						Internal
						<br />
						audit
					</div>
				</div>
				<div className={css.right}>
					<div className={css.rightGroup}>
						<div className={css.rightElement}>
							Global
							<br /> market
						</div>
						<div className={css.rightElement}>
							Armenian
							<br /> market
						</div>
					</div>
					<div className={css.rightGroup}>
						<div className={css.rightElement}>
							Custody
							<br /> services
						</div>
						<div className={css.rightElement}>
							Registry
							<br /> keeping
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
