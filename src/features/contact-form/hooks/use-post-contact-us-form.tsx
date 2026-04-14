import { useMutation } from '@tanstack/react-query';
import type { Dispatch, SetStateAction } from 'react';
import type { UseFormReset } from 'react-hook-form';

import type { FormValues } from '@/features/contact-form/ui/form';
import type { PostContactUsFormProps } from '@/shared/api/post-contact-us-form';
import { postContactUsForm } from '@/shared/api/post-contact-us-form';
import type { PostFormSuccessResponseType } from '@/shared/types/global.types';

type PostContactFormHookProps = {
	toggleSuccess: Dispatch<SetStateAction<boolean>>;
	toggleError: Dispatch<SetStateAction<boolean>>;
	reset: UseFormReset<FormValues>;
	onSuccessData?: (data: PostFormSuccessResponseType | undefined) => void;
};

export const usePostContactUsForm = ({
	toggleError,
	toggleSuccess,
	reset,
	onSuccessData,
}: PostContactFormHookProps) =>
	useMutation({
		mutationFn: (data: PostContactUsFormProps) => postContactUsForm(data),
		onSuccess: data => {
			onSuccessData?.(data);
			toggleSuccess(true);
			reset();
		},
		onError: () => {
			toggleError(true);
			reset();
		},
	});
