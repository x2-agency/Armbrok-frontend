import parser from 'html-react-parser';

import type { DocumentTabs as DocumentTabsProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const CorporateReporting = ({ title, tabs }: DocumentTabsProps) => {
	if (!tabs || tabs.length !== 0) {
		return null;
	}

	const mainTabNames = tabs.map(value => value.tabName);

	console.log(mainTabNames);

	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
		</Container>
	);
};
