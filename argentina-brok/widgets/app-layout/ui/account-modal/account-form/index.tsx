'use client';

import parser from 'html-react-parser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { postContactUsForm } from '@/shared/api/post-contact-us-form';
import { Button } from '@/shared/ui/button';
import { Captcha } from '@/shared/ui/captcha';
import { Checkbox } from '@/shared/ui/checkbox';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { ACCOUNT } from '@/widgets/app-layout/model/account-form.constants';
import {
	HOME_LINK,
	LOGO_HEADER,
} from '@/widgets/app-layout/model/header.constants';
import { Logo } from '@/widgets/app-layout/ui/logo';

import css from './index.module.css';

type FormValues = {
	email: string;
	name: string;
	subject: string;
	message: string;
	tel: string;
	checkbox: boolean;
};

export const AccountForm = () => {
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

	const {
		nameInput,
		telInput,
		emailInput,
		messageTextArea,
		captcha,
		checkbox,
		title,
		button,
		subjectInput,
	} = ACCOUNT;

	return (
		<div className={css.root}>
			<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
			<h3 className={css.title}>{parser(title)}</h3>
			<form
				className={css.form}
				onSubmit={handleSubmit(data => handleSubmitForm(data))}
			>
				<div className={css.inputGroup}>
					<Input
						className={css.input}
						type={nameInput.type}
						placeholder={nameInput.placeholder}
						label={nameInput.label}
						required={nameInput.required}
						{...register('name', {
							required: nameInput.required,
							minLength: {
								value: 4,
								message: 'Name must be at least 4 characters long',
							},
						})}
						aria-invalid={Boolean(errors.name)}
						aria-errormessage={errors.name?.message || nameInput.errorMessage}
					/>
					<Input
						className={css.input}
						type={telInput.type}
						placeholder={telInput.placeholder}
						label={telInput.label}
						required={telInput.required}
						{...register('tel', {
							required: telInput.required,
							pattern: {
								value:
									/^\+?[0-9]{1,4}?[-.\s]?(\([0-9]{1,4}\)|[0-9]{1,4})[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
								message: 'Please enter a valid phone number',
							},
						})}
						aria-invalid={Boolean(errors.tel)}
						aria-errormessage={errors.tel?.message || telInput.errorMessage}
					/>
					<Input
						className={css.input}
						type="email"
						placeholder={emailInput.placeholder}
						label={emailInput.label}
						required={emailInput.required}
						{...register('email', {
							required: emailInput.required ? 'Email is required' : false,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Please enter a valid email address',
							},
						})}
						aria-invalid={Boolean(errors.email)}
						aria-errormessage={errors.email?.message || emailInput.errorMessage}
					/>
					<Input
						className={css.input}
						type={subjectInput.type}
						placeholder={subjectInput.placeholder}
						label={subjectInput.label}
						required={subjectInput.required}
						value={'Open account'}
						{...register('subject', {
							required: nameInput.required,
							minLength: {
								value: 4,
								message: 'Subject must be at least 4 characters long',
							},
						})}
						readOnly
						aria-invalid={Boolean(errors.subject)}
						aria-errormessage={
							errors.name?.message || subjectInput.errorMessage
						}
					/>
				</div>
				<Textarea
					rows={3}
					className={css.textarea}
					placeholder={messageTextArea.placeholder}
					label={messageTextArea.label}
					required={messageTextArea.required}
					{...register('message', {
						required: messageTextArea.required,
						minLength: {
							value: 10,
							message: 'Message must be at least 10 characters long',
						},
					})}
					aria-invalid={Boolean(errors.message)}
					aria-errormessage={
						errors.message?.message || messageTextArea.errorMessage
					}
				/>
				<Checkbox
					label={checkbox.label}
					required={true}
					className={css.checkbox}
					{...register('checkbox')}
				/>
				<Captcha
					subtitle={captcha.text}
					onChange={() => toggleCaptcha(true)}
					className={css.captcha}
				/>
				<Button
					type="submit"
					disabled={!isValid || !isCaptchaChecked}
					variant="filled"
					category="big"
					className={css.button}
				>
					{parser(button.text)}
				</Button>
			</form>
		</div>
	);
};
