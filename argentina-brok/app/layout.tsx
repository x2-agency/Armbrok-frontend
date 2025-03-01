import type { PropsWithChildren } from 'react';

import { RobotoFonts } from '@/shared/config/localFont';
import { LayoutProvider } from '@/shared/hooks/use-layout-context';
import '@/shared/styles/mixins/mixin.css';
import { Favicons } from '@/view/documents/ui/favicons';
import { AppLayout } from '@/widgets/app-layout';
import { Providers } from '@/widgets/app-layout/providers';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './global.css';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
	return (
		<html lang="en">
			<head>
				<Favicons />
			</head>
			<body className={RobotoFonts.className}>
				<LayoutProvider>
					<Providers>
						<AppLayout>{children}</AppLayout>
					</Providers>
				</LayoutProvider>
			</body>
		</html>
	);
};

export default RootLayout;
