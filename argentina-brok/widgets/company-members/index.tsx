'use client';

import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import { COMPANY_MEMBERS_TITLE } from '@/widgets/company-members/models/company-members.constants';
import { Tabs } from '@/widgets/company-members/ui/tabs';

import type { CompanyMembersProps } from './company-members.types';
import css from './index.module.css';
import { CompanyMembersSection } from './ui/members-section';

export const CompanyMembers = ({ members }: CompanyMembersProps) => {
	const tabs = [
		{ label: 'Team', content: <CompanyMembersSection members={members} /> },
		{ label: 'Structure', content: '' },
	];

	return (
		<Container className={css.root}>
			<h2 className={css.title}>{parser(COMPANY_MEMBERS_TITLE)}</h2>
			<Tabs tabs={tabs} />
		</Container>
	);
};
