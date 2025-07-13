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
	{
		className,
		placeholder,
		type,
		label,
		leftIcon,
		required,
		...props
	}: PropsWithType,
	ref: ForwardedRef<HTMLInputElement>
) => {
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (type === 'tel') {
			event.target.value = event.target.value.replace(/[^0-9+\-()\s]/g, '');
		}
	};

	return (
		<label className={cx(className, css.root)}>
			{label && (
				<span className={css.label}>
					{parser(label)} {required && <span className={css.required}>*</span>}
				</span>
			)}

			<div className={css.inputWrap}>
				<input
					type={type}
					ref={ref}
					className={cx(css.input, { [css.withIcon]: leftIcon })}
					placeholder={placeholder}
					onInput={handleInput}
					{...props}
				/>
				{leftIcon && (
					<img className={css.leftIcon} src={leftIcon} loading="lazy" />
				)}

				<span className={css.placeholder}>{placeholder}</span>
			</div>
			{props['aria-invalid'] && props['aria-errormessage'] && (
				<span className={css.error}>
					{parser(props['aria-errormessage'])} {required && '*'}
				</span>
			)}
		</label>
	);
};

export const Input = forwardRef(InputComponent);
