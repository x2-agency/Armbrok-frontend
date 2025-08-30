import cx from 'clsx';
import type { PropsWithChildren } from 'react';

import css from './index.module.css';

type ContainerProps = PropsWithChildren & {
	className?: string;
	fullWidth?: boolean;
	style?: React.CSSProperties;
	id?: string;
};

export const Container = ({
	children,
	className = '',
	style,
	fullWidth = false,
	id,
}: ContainerProps) => {
	return (
		<section
			id={id}
			className={cx(css.root, className, {[css.full]: fullWidth})}
			style={style}
		>
			{children}
		</section>
	);
};
