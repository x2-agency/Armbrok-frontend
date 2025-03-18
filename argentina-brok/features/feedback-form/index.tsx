'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import LoaderSVG from '@/public/assets/icons/loader.svg';
import { Button } from '@/shared/ui/button';
import { ErrorModal } from '@/shared/ui/error-modal';
import { Input } from '@/shared/ui/input';

import { usePostFeedbackForm } from './hooks/use-post-feedback-form';
import css from './index.module.css';
import { SuccessfulModal } from './ui/successful-modal';

export type FeedbackFormProps = {
	title?: string;
	description?: string;
	subscribeButtonText?: string;
	endpoint: string;
};

export type FeedbackInputs = {
	email: string;
};

export const FeedbackForm = ({
	title,
	description,
	subscribeButtonText,
	endpoint,
}: FeedbackFormProps) => {
	const t = useTranslations('feedbackForm');
	const successfulT = useTranslations('feedbackSuccess');
	const [isSuccess, toggleSuccess] = useState<boolean>(false);
	const [isError, toggleError] = useState<boolean>(false);
	const {
		formState: { isValid, errors },
		register,
		reset,
		handleSubmit,
	} = useForm<FeedbackInputs>({ mode: 'onChange' });
	const mutation = usePostFeedbackForm({
		endpoint,
		toggleSuccess,
		reset,
		toggleError,
	});

	const handleSubmitForm = async ({ email }: FeedbackInputs) => {
		mutation.mutate({ data: { email } });
	};

	return (
		<section className={css.root}>
			<h2 className={css.title}>
				{isSuccess ? parser(successfulT('title')) : parser(title ?? '')}
			</h2>
			{description && (
				<p className={css.description}>
					{isSuccess ? parser(successfulT('description')) : parser(description)}
				</p>
			)}
			{!isSuccess && (
				<form
					className={css.form}
					onSubmit={handleSubmit(data => handleSubmitForm(data))}
				>
					<Input
						className={css.input}
						placeholder="name@mail.com"
						type="email"
						required
						{...register('email', {
							required: t('input.secondError'),
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: t('input.error'),
							},
						})}
						aria-invalid={Boolean(errors.email)}
						aria-errormessage={errors.email?.message}
					/>
					<Button
						variant="filled"
						category="big"
						type="submit"
						disabled={!isValid}
						className={cx(css.button, { [css.loading]: mutation.isPending })}
					>
						<span>{parser(subscribeButtonText ?? 'Subscribe')}</span>
						<LoaderSVG className={css.loader} />
					</Button>
				</form>
			)}
			<SuccessfulModal toggleOpen={toggleSuccess} isOpened={isSuccess} />
			<ErrorModal isOpen={isError} toggleOpen={toggleError} withHidden />
		</section>
	);
};
