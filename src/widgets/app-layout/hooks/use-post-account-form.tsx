import { useMutation } from '@tanstack/react-query';
import type { Dispatch, SetStateAction } from 'react';
import type { UseFormReset } from 'react-hook-form';

import { postContactUsForm } from '@/shared/api/post-contact-us-form';
import type { PostContactUsFormProps } from '@/shared/api/post-contact-us-form';
import type { AccountFormValuesData } from '@/widgets/app-layout/ui/account-modal/account-form';

type usePostAccountFormProps = {
	toggleSuccess: Dispatch<SetStateAction<boolean>>;
	toggleError: Dispatch<SetStateAction<boolean>>;
	reset: UseFormReset<AccountFormValuesData>;
};

export const usePostAccountForm = ({
	toggleSuccess,
	toggleError,
	reset,
}: usePostAccountFormProps) =>
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
