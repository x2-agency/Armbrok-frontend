import { MAX_STRING_LENGTH } from '@/features/graphic/model/graphic.constants';

export const truncateString = (str: string) => {
	return str.length > MAX_STRING_LENGTH
		? str.substring(0, MAX_STRING_LENGTH) + '...'
		: str;
};
