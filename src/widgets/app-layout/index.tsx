'use client';

import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { useHeaderColor } from './hooks/use-header-color';
import css from './index.module.css';
import { AccountModal } from './ui/account-modal';
import { CookiePanel } from './ui/cookie-panel';
import { Footer } from './ui/footer';
import { Header } from './ui/header';
import { Menu } from './ui/menu';
import { SearchModal } from './ui/search-modal';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
	useHeaderColor();

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
					key="viewport"
				/>
			</Head>
			<Header />
			<span className={css.divider} />
			<Menu />
			<SearchModal />
			<AccountModal />
			<CookiePanel />
			<main>{children}</main>
			<Footer />
		</>
	);
};
