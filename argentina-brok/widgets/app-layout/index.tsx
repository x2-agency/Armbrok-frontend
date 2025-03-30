'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import { useScrollObserver } from '@/shared/hooks/use-scroll-observer';
import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';

import css from './index.module.css';
import { EXCLUDED_URLS } from './model/header.constants';
import { AccountModal } from './ui/account-modal';
import { CookiePanel } from './ui/cookie-panel';
import { Footer } from './ui/footer';
import { Header } from './ui/header';
import { Menu } from './ui/menu';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
	const formattedUrl = usePathname().split('/')[2];
	const isExcluded = EXCLUDED_URLS.includes(formattedUrl);

	useScrollObserver(isScrolled => {
		const htmlElement = document.documentElement;

		if (isExcluded) {
			return;
		}

		if (isScrolled) {
			htmlElement.removeAttribute('data-header-top-color');
			htmlElement.setAttribute('data-header-top-color', 'dark');
		} else {
			htmlElement.removeAttribute('data-header-top-color');
			htmlElement.setAttribute('data-header-top-color', 'white');
		}
	});

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
					key="viewport"
				/>
			</Head>
			<headerScrollObserver.ScrollObserverProvider>
				<Header />
				<span className={css.divider} />
				<Menu />
				<AccountModal />
				<CookiePanel />
				<main>{children}</main>
				<Footer />
			</headerScrollObserver.ScrollObserverProvider>
		</>
	);
};
