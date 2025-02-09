import type { Metadata } from 'next';

import { Home } from '@/view/home';

export const metadata: Metadata = {
	title: 'Home page',
};

const IndexPage = () => {
	return <Home />;
};

export default IndexPage;
