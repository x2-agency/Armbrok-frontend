import cx from 'clsx';
import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import css from './index.module.css';

type ContainerProps = {
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
	id?: string;
	style?: React.CSSProperties;
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
	(
		{ children, className = '', fullWidth = false, id = '', style },
		ref: Ref<HTMLElement>
	) => {
		return (
			<section
				id={id}
				className={cx(css.root, className, { [css.full]: fullWidth })}
				ref={ref}
				style={style}
			>
				{children}
			</section>
		);
	}
);
