import { PropsWithChildren } from 'react';
import { Footer } from './ui/footer';
import { Header } from './ui/header';

export const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
	return (
		<>
			{/* <Header /> */}
			<main>{children}</main>
			<Footer />
		</>
	);
};
