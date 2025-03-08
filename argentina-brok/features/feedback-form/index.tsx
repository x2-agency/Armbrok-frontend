'use client';

import parser from 'html-react-parser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { postEmailForm } from '@/shared/api/post-email-form.ts';
import { getValidationRules } from '@/shared/lib/validation';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import css from './index.module.css';
import { SUCCESSFUL_FORM } from './model/feedback-form.constants';
import { SuccessfulModal } from './ui/successful-modal';

export type FeedbackFormProps = {
	title?: string;
	description?: string;
	subscribeButtonText?: string;
};

type FeedbackInputs = {
	email: string;
};

export const FeedbackForm = ({
	title,
	description,
	subscribeButtonText,
}: FeedbackFormProps) => {
	const [isSuccess, toggleSuccess] = useState<boolean>(false);
	const {
		formState: { isValid, errors },
		register,
		handleSubmit,
	} = useForm<FeedbackInputs>({ mode: 'onChange' });

	const handleSubmitForm = async ({ email }: FeedbackInputs) => {
		const response = await postEmailForm({ data: { email } });

		if (response === 201) {
			toggleSuccess(true);
		}
	};

	return (
		<section className={css.root}>
			<h2 className={css.title}>
				{isSuccess ? parser(SUCCESSFUL_FORM.title) : parser(title ?? '')}
			</h2>
			{description && (
				<p className={css.description}>
					{isSuccess
						? parser(SUCCESSFUL_FORM.description)
						: parser(description)}
				</p>
			)}
			{!isSuccess && (
				<form
					className={css.form}
					onSubmit={handleSubmit(data => handleSubmitForm(data))}
				>
					<Input
						className={css.input}
						type="email"
						placeholder="name@mail.com"
						{...register('email', getValidationRules('email'))}
						aria-invalid={Boolean(errors.email)}
						aria-errormessage="Incorrect email"
					/>
					<Button
						variant="filled"
						category="big"
						type="submit"
						disabled={!isValid}
						className={css.button}
					>
						{parser(subscribeButtonText ?? 'Subscribe')}
					</Button>
				</form>
			)}
			<SuccessfulModal toggleOpen={toggleSuccess} isOpened={isSuccess} />
		</section>
	);
};
