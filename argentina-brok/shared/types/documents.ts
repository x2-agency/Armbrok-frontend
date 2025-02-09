import type { DocumentProps } from '@/shared/ui/document';

export type StatutoryDocumentsProps = {
	className?: string;
	title?: string;
	documents: Array<DocumentProps>;
	columns?: number;
	fileDirection?: 'row' | 'column';
};
