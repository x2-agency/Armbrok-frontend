'use client';

import type { PropsWithChildren } from 'react';

import { Footer } from './ui/footer';
import { Header } from './ui/header';
import { Menu } from './ui/menu';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
	return (
		<>
			<Header />
			<Menu />
			<main>{children}</main>
			<Footer />
		</>
	);
};
