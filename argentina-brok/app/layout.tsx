import type { PropsWithChildren } from 'react';

import { RobotoFonts } from '@/shared/config/localFont';
import { AppLayout } from '@/widgets/app-layout';
import './global.css';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
	return (
		<html lang="en">
			<body className={RobotoFonts.className}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
};

export default RootLayout;
