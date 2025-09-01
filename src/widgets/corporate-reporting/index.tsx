import parser from 'html-react-parser';

import type { DocumentTabs as DocumentTabsProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { MainTabs } from './ui/main-tabs';

export const CorporateReporting = ({ title, tabs }: DocumentTabsProps) => {
	if (!tabs || tabs.length === 0) {
		return null;
	}

	return (
		<Container id="corporate-reporting" className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<MainTabs tabs={tabs} />
		</Container>
	);
};
