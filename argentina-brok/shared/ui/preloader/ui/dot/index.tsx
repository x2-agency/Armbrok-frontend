import cx from 'clsx';

import css from './index.module.css';

type DotProps = {
	position: 'first' | 'second' | 'third';
};

export const Dot: React.FC<DotProps> = ({ position }) => {
	return <span className={cx(css.ball, css[position])} />;
};
