import { AppLayout } from '@/widgets/app-layout';
import './global.css';

import { RobotoFonts } from '@/shared/config/utils/localFont';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={RobotoFonts.className}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
};

export default RootLayout;
