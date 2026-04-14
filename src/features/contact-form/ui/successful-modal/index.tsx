import parser from 'html-react-parser';
import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

import { SUCCESSFUL_MODAL_CONTACT } from '@/features/contact-form/model/contact-form.constants';
import CrossSVG from '@/public/assets/icons/cross.svg';
import SuccessfulIcon from '@/public/assets/icons/successful-icon.svg';
import type { PostFormSuccessResponseType } from '@/shared/types/global.types';

import css from './index.module.css';

type SuccessfulModalProps = {
	isOpened: boolean;
	toggleOpen: Dispatch<SetStateAction<boolean>>;
	message?: PostFormSuccessResponseType['message'];
};

export const SuccessfulModal = ({
	isOpened,
	toggleOpen,
	message,
}: SuccessfulModalProps) => {
	const ref = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		const currentRef = ref.current;

		if (isOpened && currentRef) {
			currentRef.show();
		} else if (currentRef) {
			setTimeout(() => {
				currentRef.close();
			}, 300);
		}
	}, [isOpened]);

	const handleClose = () => {
		toggleOpen(false);
		if (ref.current) ref.current.close();
	};

	return (
		<dialog ref={ref} className={css.root} role="dialog" aria-modal="true">
			<div className={css.successfulIconWrapper}>
				<SuccessfulIcon className={css.icon} />
			</div>
			<div className={css.content}>
				{message?.title && (
					<strong>{parser(message.title)}</strong>
				)}
				<p>
					{parser(
						message?.description ??
							SUCCESSFUL_MODAL_CONTACT.description
					)}
				</p>
			</div>
			<button className={css.close} onClick={handleClose}>
				<CrossSVG className={css.cross} />
			</button>
		</dialog>
	);
};
