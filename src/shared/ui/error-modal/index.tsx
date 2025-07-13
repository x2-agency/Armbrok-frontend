'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { useTranslations } from 'next-intl';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';

import CrossSVG from '@/public/assets/icons/cross.svg';

import css from './index.module.css';

type ErrorModalProps = {
	isOpen: boolean;
	toggleOpen: Dispatch<SetStateAction<boolean>>;
	withHidden?: boolean;
};

export const ErrorModal = ({
	isOpen,
	withHidden,
	toggleOpen,
}: ErrorModalProps) => {
	const modalRef = useRef<HTMLDialogElement | null>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const t = useTranslations('errorModal');

	useEffect(() => {
		const currentRef = modalRef.current;

		if (currentRef && isOpen) {
			currentRef.showModal();
			document.body.style.overflow = 'hidden';
			setIsVisible(true);
		} else {
			setIsVisible(false);

			if (withHidden) {
				document.body.style.overflow = 'auto';
			}

			setTimeout(() => {
				if (currentRef) {
					currentRef.close();
				}
			}, 300);
		}
	}, [isOpen, setIsVisible, withHidden]);

	useEffect(() => {
		const currentRef = modalRef.current;

		const handleClose = () => {
			toggleOpen(false);

			if (withHidden) {
				document.body.style.overflow = 'auto';
			}
		};

		if (currentRef) {
			currentRef.addEventListener('close', handleClose);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('close', handleClose);
			}
		};
	}, [toggleOpen, withHidden]);

	useEffect(() => {
		const currentRef = modalRef.current;

		const handleBackdropClick = (event: MouseEvent) => {
			if (event.target === currentRef) {
				toggleOpen(false);

				if (withHidden) {
					document.body.style.overflow = 'auto';
				}
			}
		};

		if (currentRef) {
			currentRef.addEventListener('click', handleBackdropClick);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('click', handleBackdropClick);
			}
		};
	}, [toggleOpen, withHidden]);

	return (
		<dialog
			ref={modalRef}
			className={cx(css.root, { [css.visible]: isVisible })}
		>
			<button className={css.close} onClick={() => toggleOpen(false)}>
				<CrossSVG className={css.cross} />
			</button>
			<h4 className={css.title}>{parser(t('title'))}</h4>
			<p className={css.description}>{parser(t('description'))}</p>
			<ul className={css.contacts}>
				<li className={css.paragraph}>
					<p className={css.label}>{parser(t('phoneNumberLabel'))}:</p>
					<a href="tel:+374 11 59 00 00" className={css.link}>
						+374 11 59 00 00
					</a>
					<a href="tel:+374 96 53 87 00" className={css.link}>
						+374 96 53 87 00
					</a>
				</li>
				<li className={css.paragraph}>
					<p className={css.label}>{parser(t('emailLabel'))}:</p>
					<a href="mailto:armbrok@armbrok.am" className={css.link}>
						armbrok@armbrok.am
					</a>
				</li>
			</ul>
		</dialog>
	);
};
