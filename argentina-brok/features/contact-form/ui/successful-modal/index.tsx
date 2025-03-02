import parser from 'html-react-parser';
import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

import { SUCCESSFUL_MODAL_CONTACT } from '@/features/contact-form/model/contact-form.constants';
import CrossSVG from '@/public/assets/icons/cross.svg';
import SuccessfulIcon from '@/public/assets/icons/successful-icon.svg';

import css from './index.module.css';

type SuccessfulModalProps = {
	isOpened: boolean;
	toggleOpen: Dispatch<SetStateAction<boolean>>;
};

export const SuccessfulModal = ({
	isOpened,
	toggleOpen,
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
			<p>{parser(SUCCESSFUL_MODAL_CONTACT.description)}</p>
			<button className={css.close} onClick={handleClose}>
				<CrossSVG className={css.cross} />
			</button>
		</dialog>
	);
};
