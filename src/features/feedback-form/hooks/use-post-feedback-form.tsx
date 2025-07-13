import { useMutation } from '@tanstack/react-query';
import type { Dispatch, SetStateAction } from 'react';
import type { UseFormReset } from 'react-hook-form';

import type { PostEmailFormData } from '@/shared/api/post-email-form.ts';
import { postEmailForm } from '@/shared/api/post-email-form.ts';

import type { FeedbackInputs } from '..';

type PostFeedbackFormData = {
	endpoint: string;
	reset: UseFormReset<FeedbackInputs>;
	toggleSuccess: Dispatch<SetStateAction<boolean>>;
	toggleError: Dispatch<SetStateAction<boolean>>;
};

export const usePostFeedbackForm = ({
	endpoint: endPoint,
	reset,
	toggleError,
	toggleSuccess,
}: PostFeedbackFormData) =>
	useMutation({
		mutationFn: (data: PostEmailFormData) => postEmailForm(data, endPoint),
		onSuccess: () => {
			reset();
			toggleSuccess(true);
		},
		onError: () => {
			reset();
			toggleError(true);
		},
	});
