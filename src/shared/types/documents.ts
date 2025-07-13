import type { MediaData } from './global.types';

export type StatutoryDocumentsProps = {
	className?: string;
	title?: string;
	documents?: Array<MediaData>;
	columns?: number;
	fileDirection?: 'row' | 'column';
};
