'use client';

import parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { COOKIE_PANEL_INFO } from '@/widgets/app-layout/models/cookie-panel.constants';

import css from './index.module.css';

export const CookiePanel = () => {
	const ref = useRef<HTMLDialogElement | null>(null);
	const [isClosed, toggleClose] = useState<boolean>(true);

	useEffect(() => {
		const currentRef = ref.current;
		const isAccepted = localStorage.getItem('isAccepted') === 'true';

		if (!isAccepted) {
			toggleClose(false);
			return;
		}

		if (currentRef && !isClosed) {
			setTimeout(() => {
				currentRef.show();
			}, 200);
		}
	}, [isClosed]);

	const handleClick = () => {
		const currentRef = ref.current;

		if (currentRef) {
			localStorage.setItem('isAccepted', 'true');
			toggleClose(true);
			currentRef.close();
		}
	};

	if (isClosed) {
		return null;
	}

	return (
		<dialog className={css.root} ref={ref}>
			<div className={css.about}>
				<p className={css.summary}>{parser(COOKIE_PANEL_INFO.summary)}</p>
				<p className={css.aboutCookies}>{parser(COOKIE_PANEL_INFO.about)}</p>
			</div>
			<Button variant="filled" onClick={handleClick}>
				{parser(COOKIE_PANEL_INFO.button)}
			</Button>
		</dialog>
	);
};
