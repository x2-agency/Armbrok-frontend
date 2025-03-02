'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import { Captcha } from '@/features/contact-form/ui/captcha';
import type { ContactForm } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

import css from './index.module.css';

export const Form = ({
	emailField,
	nameField,
	subjectField,
	messageField,
	sendButtonText,
	captchaCaption,
	title,
	description,
	className,
}: ContactForm & { className?: string }) => {
	return (
		<form className={cx(css.root, className)}>
			<div className={css.titleBlock}>
				{title && <h3 className={css.title}>{parser(title)}</h3>}
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</div>
			<div className={css.inputs}>
				<Input
					placeholder={nameField.placeholder}
					type="text"
					label={nameField.label}
					required={nameField.required}
				/>
				<Input
					placeholder={emailField.placeholder}
					type="email"
					label={emailField.label}
					required={emailField.required}
				/>
				<Input
					placeholder={subjectField.placeholder}
					type="text"
					label={subjectField.label}
					required={subjectField.required}
				/>
				<Textarea
					placeholder={messageField.placeholder}
					label={messageField.label}
					required={messageField.required}
				/>
			</div>
			<Captcha subtitle={captchaCaption} className={css.captcha} />
			<Button type="submit" variant="filled" category="big">
				{parser(sendButtonText ?? 'Send message')}
			</Button>
		</form>
	);
};
