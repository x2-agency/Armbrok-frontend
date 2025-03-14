import cx from 'clsx';
import parser from 'html-react-parser';
import type { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import css from './index.module.css';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'children'>;

type CheckboxProps = {
	color?: 'white' | 'black';
	className?: string;
	label?: string;
} & Props;

export const CheckboxComponent = (
	{ className, color = 'white', label, ...props }: CheckboxProps,
	ref: ForwardedRef<HTMLInputElement>
) => {
	return (
		<label className={cx(css.root, className)}>
			<input
				ref={ref}
				type="checkbox"
				className={cx(css.checkbox, css[color])}
				{...props}
			/>
			{label && <span className={css.text}>{parser(label)}</span>}
		</label>
	);
};

export const Checkbox = forwardRef(CheckboxComponent);
