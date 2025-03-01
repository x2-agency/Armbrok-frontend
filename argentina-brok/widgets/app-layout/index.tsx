'use client';

import cx from 'clsx';
import type { PropsWithChildren } from 'react';

import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';

import css from './index.module.css';
import { CookiePanel } from './ui/cookie-panel';
import { Footer } from './ui/footer';
import { Header } from './ui/header';
import { Menu } from './ui/menu';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
	return (
		<headerScrollObserver.ScrollObserverProvider>
			<Header />
			<span className={cx(css.divider, css.backgroundColor)} />
			<Menu />
			<CookiePanel />
			<main>{children}</main>
			<Footer />
		</headerScrollObserver.ScrollObserverProvider>
	);
};
