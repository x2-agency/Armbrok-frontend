'use client';

import Head from 'next/head';
import type { PropsWithChildren } from 'react';

import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';

import css from './index.module.css';
import { AccountModal } from './ui/account-modal';
import { CookiePanel } from './ui/cookie-panel';
import { Footer } from './ui/footer';
import { Header } from './ui/header';
import { Menu } from './ui/menu';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
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
