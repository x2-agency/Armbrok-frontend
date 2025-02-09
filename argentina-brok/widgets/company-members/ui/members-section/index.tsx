import type { CompanyMembersSectionProps } from '@/widgets/company-members/company-members.types';
import { Member } from '@/widgets/company-members/ui/member';

import css from './index.module.css';

export const CompanyMembersSection = ({
	members,
}: CompanyMembersSectionProps) => {
	return (
		<section className={css.root}>
			{members.map((value, index) => (
				<Member key={index} {...value} />
			))}
		</section>
	);
};
