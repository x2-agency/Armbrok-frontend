'use client';

import { Error } from '@/view/error';

const NotFoundPage = () => {
	return <Error statusCode={404} />;
};

export default NotFoundPage;
