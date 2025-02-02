import { AppLayout } from '@/widgets/app-layout';
import './global.css';

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
};

export default RootLayout;
