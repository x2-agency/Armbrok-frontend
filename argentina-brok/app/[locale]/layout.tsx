import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { Locales } from '@/i18n/routing';
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
import '@/app/[locale]/global.css';

type RootLayoutProps = PropsWithChildren & {
	params: { locale: keyof typeof Locales };
};

export async function generateStaticParams() {
	return Object.values(Locales).map(locale => ({ locale }));
}

const RootLayout = async ({ children, params }: Readonly<RootLayoutProps>) => {
	const messages = await getMessages();
	const locale = (await params).locale;
	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<head>
				<Favicons />
			</head>
			<body className={RobotoFonts.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<LayoutProvider>
						<Providers>
							<AppLayout>{children}</AppLayout>
						</Providers>
					</LayoutProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
