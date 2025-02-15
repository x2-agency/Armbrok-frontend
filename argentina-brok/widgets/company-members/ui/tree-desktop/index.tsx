import cx from 'clsx';

import css from './index.module.css';

export const TreeDesktop = () => {
	return (
		<article className={css.root}>
			<div className={css.element}>General Meeting of Shareholders</div>
			<div className={css.element}>
				<div className={css.circleTop} />
				Chief Executive Officer
				<div className={css.circleBottom} />
			</div>
			<div className={cx(css.group, css.first)}>
				<div className={css.elementSecondType}>
					<div className={css.circleTop} />
					Internal
					<br /> audit
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					Accounting
				</div>
				<div className={cx(css.elementSecondType, css.withTop, css.withBottom)}>
					<div className={css.circleTop} />
					Depositary
					<br /> services
					<div className={css.circleBottom} />
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					Research
					<br /> & analysis
				</div>
				<div className={cx(css.elementSecondType)}>
					<div className={css.circleTop} />
					International
					<br /> projects
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					Consulting
				</div>
				<div className={cx(css.elementSecondType, css.withTop, css.withBottom)}>
					<div className={css.circleTop} />
					Securities
					<br /> trading
					<div className={css.circleBottom} />
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					Asset
					<br /> management
				</div>
				<div className={css.elementSecondType}>
					<div className={css.circleTop} />
					Investment
					<br /> banking
				</div>
			</div>
			<div className={css.underLevel}>
				<div className={cx(css.group, css.second)}>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						Registry keeping
					</div>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						Custody services
					</div>
				</div>
				<div className={cx(css.group, css.second)}>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						Armenian market
					</div>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						Global market
					</div>
				</div>
			</div>
		</article>
	);
};
