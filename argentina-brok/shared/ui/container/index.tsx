import cx from 'clsx';
import type { ReactNode } from 'react';

import css from './index.module.css';

type ContainerProps = {
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
	style?: React.CSSProperties;
};

export const Container = ({
	children,
	className = '',
	style,
	fullWidth = false,
}: ContainerProps) => {
	return (
		<section
			className={cx(css.root, className, fullWidth && css.full)}
			style={style}
		>
			{children}
		</section>
	);
};
