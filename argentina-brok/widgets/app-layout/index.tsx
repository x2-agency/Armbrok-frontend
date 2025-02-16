'use client';

import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';

import { SHOW_PANEL_URLS } from './models/cookie-panel.constants';
import { CookiePanel } from './ui/cookie-panel';
import { Footer } from './ui/footer';
import { Header } from './ui/header';
import { Menu } from './ui/menu';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
	const router = usePathname();
	const isShowPanel = SHOW_PANEL_URLS.includes(router);

	return (
		<headerScrollObserver.ScrollObserverProvider>
			<Header />
			<Menu />
			{isShowPanel && <CookiePanel />}
			<main>{children}</main>
			<Footer />
		</headerScrollObserver.ScrollObserverProvider>
	);
};
