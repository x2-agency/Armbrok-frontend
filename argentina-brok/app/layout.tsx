import type { PropsWithChildren } from 'react';

import { RobotoFonts } from '@/shared/config/localFont';
import { LayoutProvider } from '@/shared/hooks/use-layout-context';
import '@/shared/styles/mixins/mixin.css';
import { AppLayout } from '@/widgets/app-layout';

import './global.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
