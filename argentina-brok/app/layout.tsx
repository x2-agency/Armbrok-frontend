import type { PropsWithChildren } from 'react';

import { RobotoFonts } from '@/shared/config/localFont';
import '@/shared/styles/mixins/mixin.css';
import { LayoutProvider } from '@/shared/hooks/use-layout-context';
import { AppLayout } from '@/widgets/app-layout';

import './global.css';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
	return (
		<html lang="en">
			<body className={RobotoFonts.className}>
				<LayoutProvider>
					<AppLayout>{children}</AppLayout>
				</LayoutProvider>
			</body>
		</html>
	);
};

export default RootLayout;
