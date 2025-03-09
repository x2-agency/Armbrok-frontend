'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Captcha } from '@/features/contact-form/ui/captcha';
import { SuccessfulModal } from '@/features/contact-form/ui/successful-modal';
import { postContactUsForm } from '@/shared/api/post-contact-us-form';
import type { ContactForm } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

import css from './index.module.css';

type FormValues = {
	email: string;
	name: string;
	subject: string;
	message: string;
};

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
	const [isCaptchaChecked, toggleCaptcha] = useState<boolean>(false);
	const [isSuccess, toggleSuccess] = useState<boolean>(false);

	const {
		formState: { isValid, errors },
		register,
		reset,
		handleSubmit,
	} = useForm<FormValues>({ mode: 'onChange' });

	const handleSubmitForm = async (formData: FormValues) => {
		const response = await postContactUsForm({ data: { ...formData } });

		if (response === 201) {
			reset();
			toggleSuccess(true);
		}
	};

	return (
		<>
			<form
				className={cx(css.root, className)}
				onSubmit={handleSubmit(data => handleSubmitForm(data))}
			>
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
						{...register('name', {
							required: nameField.required,
							minLength: {
								value: 4,
								message: 'Name must be at least 4 characters long',
							},
						})}
						aria-invalid={Boolean(errors.name)}
						aria-errormessage={errors.name?.message || nameField.errorMessage}
					/>
					<Input
						placeholder={emailField.placeholder}
						type="email"
						label={emailField.label}
						required={emailField.required}
						{...register('email', {
							required: emailField.required ? 'Email is required' : false,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Please enter a valid email address',
							},
						})}
						aria-invalid={Boolean(errors.email)}
						aria-errormessage={errors.email?.message || emailField.errorMessage}
					/>
					<Input
						placeholder={subjectField.placeholder}
						type="text"
						label={subjectField.label}
						required={subjectField.required}
						{...register('subject', {
							required: subjectField.required,
							minLength: {
								value: 4,
								message: 'Subject must be at least 4 characters long',
							},
						})}
						aria-invalid={Boolean(errors.subject)}
						aria-errormessage={
							errors.subject?.message || subjectField.errorMessage
						}
					/>
					<Textarea
						placeholder={messageField.placeholder}
						label={messageField.label}
						required={messageField.required}
						{...register('message', {
							required: messageField.required,
							minLength: {
								value: 10,
								message: 'Message must be at least 10 characters long',
							},
						})}
						aria-invalid={Boolean(errors.message)}
						aria-errormessage={
							errors.message?.message || messageField.errorMessage
						}
					/>
				</div>
				<Captcha
					onChange={() => toggleCaptcha(true)}
					subtitle={captchaCaption}
					className={css.captcha}
				/>
				<Button
					disabled={!isValid || !isCaptchaChecked}
					type="submit"
					variant="filled"
					category="big"
					className={css.button}
				>
					{parser(sendButtonText ?? 'Send message')}
				</Button>
			</form>
			<SuccessfulModal isOpened={isSuccess} toggleOpen={toggleSuccess} />
		</>
	);
};
