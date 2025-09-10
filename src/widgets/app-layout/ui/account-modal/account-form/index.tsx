/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import LoaderSVG from '@/public/assets/icons/loader.svg';
import type { PostContactUsFormProps } from '@/shared/api/post-contact-us-form';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import type { PostFormSuccessResponseType } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { ErrorModal } from '@/shared/ui/error-modal';
import { FileUploader } from '@/shared/ui/file-uploader';
import { Input } from '@/shared/ui/input';
import { useAccountTranslations } from '@/widgets/app-layout/hooks/use-account-translations';
import { usePostAccountForm } from '@/widgets/app-layout/hooks/use-post-account-form';
import { ACCOUNT } from '@/widgets/app-layout/model/account-form.constants';
import { SuccessForm } from '@/widgets/app-layout/ui/account-modal/success-form';

import css from './index.module.css';

const Captcha = lazy(() => import('@/shared/ui/captcha'));

type FormProps = {
	isModalOpen: boolean;
};

export type AccountFormValuesData = PostContactUsFormProps['data'] & {
	phoneNumber: string;
	checkbox: boolean;
};

export const AccountForm = ({ isModalOpen }: FormProps) => {
	const pathname = usePathname();
	const [successMessage, setSuccessMessage] = useState<
		PostFormSuccessResponseType | undefined
	>({});
	const [isError, toggleError] = useState<boolean>(false);
	const [isCaptchaChecked, toggleCaptcha] = useState<boolean>(false);
	const { subjectForm, privacyPolicyText } = useLayoutContext();
	const {
		nameInputTranslation,
		phoneInputTranslation,
		emailInputTranslation,
		captchaTranslation,
	} = useAccountTranslations();
	const t = useTranslations('investButton');

	const {
		formState: { isValid, errors },
		register,
		reset,
		handleSubmit,
		setValue,
		control,
	} = useForm<AccountFormValuesData>({ mode: 'onChange' });
	const mutation = usePostAccountForm({
		setSuccessMessage,
		toggleError,
		reset,
	});

	useEffect(() => {
		if (subjectForm) {
			setValue('formSubject', subjectForm);
		}

		if (!isModalOpen) {
			reset();
		}

		setValue(
			'referralLink',
			`${process.env.NEXT_PUBLIC_WEBSITE_URL ?? ''}${pathname.substring(1)}`
		);

		return () => {
			setTimeout(() => {
				setSuccessMessage(undefined);
			}, 300);
		};
	}, [subjectForm, setValue, pathname, isModalOpen, reset]);

	const handleSubmitForm = async (formData: AccountFormValuesData) => {
		const { checkbox, ...restData } = formData;
		mutation.mutate({ data: { ...restData } });
	};
	const { nameInput, telInput, emailInput } = ACCOUNT;

	return (
		<div className={css.root}>
			<h3 className={css.title}>{parser(subjectForm)}</h3>
			<ErrorModal isOpen={isError} toggleOpen={toggleError} />
			{successMessage ? (
				<SuccessForm message={successMessage.message} />
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
					</div>
					<FileUploader
						control={control}
						name="file"
						className={css.fileUploader}
					/>
					<Checkbox
						label={privacyPolicyText}
						required={true}
						className={css.checkbox}
						{...register('checkbox', { required: true })}
					/>
					<Suspense>
						<Captcha
							subtitle={captchaTranslation}
							onChange={() => toggleCaptcha(true)}
							className={css.captcha}
						/>
					</Suspense>
					<Button
						type="submit"
						disabled={!isValid || !isCaptchaChecked}
						variant="filled"
						category="big"
						className={cx(css.button, { [css.loading]: mutation.isPending })}
					>
						<span>
							{parser(subjectForm === t('text') ? t('button') : subjectForm)}
						</span>
						<LoaderSVG className={css.loader} />
					</Button>
				</form>
			)}
		</div>
	);
};
