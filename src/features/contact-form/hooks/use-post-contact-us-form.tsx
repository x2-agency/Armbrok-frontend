import { useMutation } from '@tanstack/react-query';
import type { Dispatch, SetStateAction } from 'react';
import type { UseFormReset } from 'react-hook-form';

import type { FormValues } from '@/features/contact-form/ui/form';
import type { PostContactUsFormProps } from '@/shared/api/post-contact-us-form';
import { postContactUsForm } from '@/shared/api/post-contact-us-form';

type PostContactFormHookProps = {
	toggleSuccess: Dispatch<SetStateAction<boolean>>;
	toggleError: Dispatch<SetStateAction<boolean>>;
	reset: UseFormReset<FormValues>;
};

export const usePostContactUsForm = ({
	toggleError,
	toggleSuccess,
	reset,
}: PostContactFormHookProps) =>
	useMutation({
		mutationFn: (data: PostContactUsFormProps) => postContactUsForm(data),
		onSuccess: () => {
			toggleSuccess(true);
			reset();
		},
		onError: () => {
			toggleError(true);
			reset();
		},
	});
