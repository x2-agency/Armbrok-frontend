import cx from 'clsx';
import parser from 'html-react-parser';
import {
	type ComponentPropsWithoutRef,
	type ForwardedRef,
	forwardRef,
} from 'react';

import css from './index.module.css';

type Props = Omit<ComponentPropsWithoutRef<'textarea'>, 'children'>;

type PropsWithType = {
	className?: string;
	label?: string;
} & Props;

const TextareaComponent = (
	{ className, placeholder, label, required, ...props }: PropsWithType,
	ref: ForwardedRef<HTMLTextAreaElement>
) => {
	return (
		<label className={cx(className, css.root)}>
			{label && (
				<span className={css.label}>
					{parser(label)} {required && <span className={css.required}>*</span>}
				</span>
			)}
			<textarea
				rows={4}
				className={css.textarea}
				ref={ref}
				placeholder={placeholder}
				required={required}
				{...props}
			/>
			{props['aria-errormessage'] && props['aria-invalid'] && (
				<span>{parser(props['aria-errormessage'])} *</span>
			)}
		</label>
	);
};

export const Textarea = forwardRef(TextareaComponent);
