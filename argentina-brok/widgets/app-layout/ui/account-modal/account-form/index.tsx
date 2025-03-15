/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useAccountTranslations } from '@/widgets/app-layout/hooks/use-account-translations';
import { ACCOUNT } from '@/widgets/app-layout/model/account-form.constants';
import {
	HOME_LINK,
	LOGO_HEADER,
} from '@/widgets/app-layout/model/header.constants';
import { SuccessForm } from '@/widgets/app-layout/ui/account-modal/success-form';
import { Logo } from '@/widgets/app-layout/ui/logo';

import css from './index.module.css';

type FormValues = {
	email: string;
	name: string;
	subject: string;
	message: string;
	phoneNumber: string;
	checkbox: boolean;
};

export const AccountForm = () => {
	const [isCaptchaChecked, toggleCaptcha] = useState<boolean>(false);
	const [isSuccess, toggleSuccess] = useState<boolean>(false);
	const {
		nameInputTranslation,
		messageInputTranslation,
		subjectInputTranslation,
		phoneInputTranslation,
		emailInputTranslation,
		checkboxTranslation,
		captchaTranslation,
		buttonTranslation,
		titleTranslation,
	} = useAccountTranslations();

	const {
		formState: { isValid, errors },
		register,
		reset,
		handleSubmit,
	} = useForm<FormValues>({ mode: 'onChange' });

	const handleSubmitForm = async (formData: FormValues) => {
		const { checkbox, ...restData } = formData;
		const response = await postContactUsForm({ data: { ...restData } });

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
		title,
		subjectInput,
	} = ACCOUNT;

	return (
		<div className={css.root}>
			<Logo logo={LOGO_HEADER} href={HOME_LINK} className={css.logo} />
			<h3 className={css.title}>{parser(titleTranslation)}</h3>
			{isSuccess ? (
				<SuccessForm />
			) : (
				<form
					className={css.form}
					onSubmit={handleSubmit(data => handleSubmitForm(data))}
				>
					<div className={css.inputGroup}>
						<Input
							className={css.input}
							type={nameInput.type}
							placeholder={nameInputTranslation.placeholder}
							label={nameInputTranslation.label}
							required={nameInput.required}
							{...register('name', {
								required: nameInput.required,
								minLength: {
									value: 4,
									message: nameInputTranslation.secondErrorMessage,
								},
							})}
							aria-invalid={Boolean(errors.name)}
							aria-errormessage={
								errors.name?.message || nameInputTranslation.errorMessage
							}
						/>
						<Input
							className={css.input}
							type={telInput.type}
							placeholder={phoneInputTranslation.placeholder}
							label={phoneInputTranslation.label}
							required={telInput.required}
							{...register('phoneNumber', {
								required: telInput.required,
								pattern: {
									value:
										/^\+?[0-9]{1,4}?[-.\s]?(\([0-9]{1,4}\)|[0-9]{1,4})[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
									message: phoneInputTranslation.secondErrorMessage,
								},
							})}
							aria-invalid={Boolean(errors.phoneNumber)}
							aria-errormessage={
								errors.phoneNumber?.message ||
								phoneInputTranslation.errorMessage
							}
						/>
						<Input
							className={css.input}
							type="email"
							placeholder={emailInputTranslation.placeholder}
							label={emailInputTranslation.label}
							required={emailInput.required}
							{...register('email', {
								required: emailInput.required,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: emailInputTranslation.secondErrorMessage,
								},
							})}
							aria-invalid={Boolean(errors.email)}
							aria-errormessage={
								errors.email?.message || emailInputTranslation.errorMessage
							}
						/>
						<Input
							className={css.input}
							type={subjectInput.type}
							placeholder={subjectInputTranslation.placeholder}
							label={subjectInputTranslation.label}
							required={subjectInput.required}
							value={subjectInputTranslation.value}
							{...register('subject', {
								required: nameInput.required,
								minLength: {
									value: 4,
									message: subjectInputTranslation.secondErrorMessage,
								},
							})}
							readOnly
							aria-invalid={Boolean(errors.subject)}
							aria-errormessage={
								errors.name?.message || subjectInputTranslation.errorMessage
							}
						/>
					</div>
					<Textarea
						rows={3}
						className={css.textarea}
						placeholder={messageInputTranslation.placeholder}
						label={messageInputTranslation.label}
						required={messageTextArea.required}
						{...register('message', {
							required: messageTextArea.required,
							minLength: {
								value: 10,
								message: messageInputTranslation.secondErrorMessage,
							},
						})}
						aria-invalid={Boolean(errors.message)}
						aria-errormessage={
							errors.message?.message || messageInputTranslation.errorMessage
						}
					/>
					<Checkbox
						label={checkboxTranslation}
						required={true}
						className={css.checkbox}
						{...register('checkbox')}
					/>
					<Captcha
						subtitle={captchaTranslation}
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
						{parser(buttonTranslation)}
					</Button>
				</form>
			)}
		</div>
	);
};
