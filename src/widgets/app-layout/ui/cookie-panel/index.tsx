'use client';

import parser from 'html-react-parser';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export const CookiePanel = () => {
	const ref = useRef<HTMLDialogElement | null>(null);
	const [isClosed, setIsClosed] = useState<boolean>(true);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const t = useTranslations('cookiePanel');

	useEffect(() => {
		const isAccepted = localStorage.getItem('isAccepted') === 'true';

		if (!isAccepted) {
			setIsClosed(false);
			setIsMounted(true);
		}
	}, []);

	useEffect(() => {
		const currentRef = ref.current;

		if (currentRef && !isClosed) {
			setIsMounted(true);
			setTimeout(() => {
				currentRef.setAttribute('open', '');
			}, 2000);
		} else if (currentRef) {
			currentRef.removeAttribute('open');
			setTimeout(() => {
				currentRef.close();
				setIsMounted(false);
			}, 700);
		}
	}, [isClosed]);

	const handleClick = () => {
		localStorage.setItem('isAccepted', 'true');
		setIsClosed(true);
	};

	if (!isMounted) return null;

	return (
		<dialog className={css.root} ref={ref} role="dialog" aria-modal="true">
			<div className={css.about}>
				<p className={css.summary}>{parser(t('summary'))}</p>
				<p className={css.aboutCookies}>
					{parser(t('about'))} <Link href="#">{parser(t('link'))}</Link>
				</p>
			</div>
			<Button variant="filled" onClick={handleClick} className={css.button}>
				{parser(t('button'))}
			</Button>
		</dialog>
	);
};
