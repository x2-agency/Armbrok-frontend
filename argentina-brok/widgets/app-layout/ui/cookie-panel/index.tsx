'use client';

import parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { COOKIE_PANEL_INFO } from '@/widgets/app-layout/models/cookie-panel.constants';

import css from './index.module.css';

export const CookiePanel = () => {
	const ref = useRef<HTMLDialogElement | null>(null);
	const [isClosed, setIsClosed] = useState<boolean>(true);
	const [isMounted, setIsMounted] = useState<boolean>(false);

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
			}, 10);
		} else if (currentRef) {
			currentRef.removeAttribute('open');
			setTimeout(() => {
				currentRef.close();
				setIsMounted(false);
			}, 300);
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
				<p className={css.summary}>{parser(COOKIE_PANEL_INFO.summary)}</p>
				<p className={css.aboutCookies}>{parser(COOKIE_PANEL_INFO.about)}</p>
			</div>
			<Button variant="filled" onClick={handleClick} className={css.button}>
				{parser(COOKIE_PANEL_INFO.button)}
			</Button>
		</dialog>
	);
};
