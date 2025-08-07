import '@/shared/styles/global.css';
import '@/shared/styles/mixins/mixin.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { Locales } from '@/i18n/routing';
import { RobotoFonts, ArmenianFonts } from '@/shared/config/localFont';
import { LayoutProvider } from '@/shared/hooks/use-layout-context';
import { Favicons } from '@/view/documents/ui/favicons';
import { AppLayout } from '@/widgets/app-layout';
import { Providers } from '@/widgets/app-layout/providers';

type RootLayoutProps = PropsWithChildren & {
	params: Promise<{ locale: keyof typeof Locales }>;
};

export async function generateStaticParams() {
	return Object.values(Locales).map(locale => ({ locale }));
}

const RootLayout = async ({ children, params }: Readonly<RootLayoutProps>) => {
	const { locale } = await params;
	setRequestLocale(locale);

	const messages = await getMessages({ locale });

	return (
		<html lang={locale}>
			<head>
				<meta
					name="google-site-verification"
					content="0Wlr8IRw0xt8JY1dLmgtju5ROZXCWNqoJI7L2RqxwUA"
				/>
				<meta name="robots" content="noindex, nofollow"></meta>
				<Favicons />
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
					key="viewport"
				/>
			</head>
			<body className={cx(RobotoFonts.variable, ArmenianFonts.variable)}>
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
