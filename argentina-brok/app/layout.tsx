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

export const LOCALE_CODES = {
	EN: 'en',
	RU: 'ru',
	HY: 'hy',
};

type RootLayoutProps = PropsWithChildren & {
	params: { locale: keyof typeof LOCALE_CODES };
};

export async function generateStaticParams() {
	return Object.values(LOCALE_CODES).map(locale => ({ locale }));
}

const RootLayout = ({
	children,
	params: { locale },
}: Readonly<RootLayoutProps>) => {
	return (
		<html lang={locale}>
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
