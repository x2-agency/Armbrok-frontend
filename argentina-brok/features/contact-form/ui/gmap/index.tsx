import cx from 'clsx';

import css from './index.module.css';

type GMapProps = {
	className?: string;
};

export const GMap = ({ className }: GMapProps) => {
	return <address className={cx(css.root, className)}></address>;
};
