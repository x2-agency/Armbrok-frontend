'use client';

import parser from 'html-react-parser';
import { useForm } from 'react-hook-form';

import { postEmailForm } from '@/shared/api/post-email-form.ts';
import { getValidationRules } from '@/shared/lib/validation';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import css from './index.module.css';

export type FeedbackFormProps = {
	title: string;
	description?: string;
};

type FeedbackInputs = {
	email: string;
};

export const FeedbackForm = ({ title, description }: FeedbackFormProps) => {
	const {
		formState: { isValid },
		register,
		handleSubmit,
	} = useForm<FeedbackInputs>({ mode: 'onChange' });

	const handleSubmitForm = ({ email }: FeedbackInputs) => {
		postEmailForm({ email });
	};

	return (
		<section className={css.root}>
			<h2 className={css.title}>{parser(title)}</h2>
			{description && <p className={css.description}>{parser(description)}</p>}
			<form
				className={css.form}
				onSubmit={handleSubmit(data => handleSubmitForm(data))}
			>
				<Input
					className={css.input}
					type="email"
					placeholder="name@mail.com"
					{...register('email', getValidationRules('email'))}
				/>
				<Button
					variant="filled"
					category="big"
					type="submit"
					disabled={!isValid}
					className={css.button}
				>
					Subscribe
				</Button>
			</form>
		</section>
	);
};
