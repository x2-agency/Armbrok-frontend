/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import {
	type ComponentPropsWithoutRef,
	type ForwardedRef,
	forwardRef,
} from 'react';

import css from './index.module.css';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'children'>;

type PropsWithType = {
	type: 'text' | 'email' | 'tel';
	isColorInput?: boolean;
	className?: string;
	label?: string;
	leftIcon?: string;
} & Props;

const InputComponent = (
	{ className, placeholder, type, label, leftIcon, ...props }: PropsWithType,
	ref: ForwardedRef<HTMLInputElement>
) => {
	return (
		<label className={cx(className, css.root)}>
			{label && <span className={css.label}>{parser(label)}</span>}
			{leftIcon && <img className={css.leftIcon} src={leftIcon} />}
			<input
				type={type}
				ref={ref}
				className={cx(css.input, { [css.withIcon]: leftIcon })}
				placeholder={placeholder}
				{...props}
			/>
		</label>
	);
};

export const Input = forwardRef(InputComponent);
