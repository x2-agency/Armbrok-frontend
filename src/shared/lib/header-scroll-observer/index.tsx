import { createObserver } from '@/shared/lib/create-observer';

export const headerScrollObserver = createObserver<'white' | 'dark' | string>([
	{
		attributeName: 'data-header-top-color',
		defaultValue: 'dark',
		offset: 40,
	},
	{
		attributeName: 'data-header-bottom-color',
		defaultValue: 'dark',
		triggerPosition: 1,
		offset: -40,
	},
]);
