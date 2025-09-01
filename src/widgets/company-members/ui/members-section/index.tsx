import type { TabEmployee } from '@/shared/types/global.types';
import { Member } from '@/widgets/company-members/ui/member';

import css from './index.module.css';

export type CompanyMembersSectionProps = {
	employees?: Array<TabEmployee>;
};

export const CompanyMembersSection = ({
	employees,
}: CompanyMembersSectionProps) => {
	return (
		<ul className={css.root}>
			{employees?.map((value, index) => (
				<li key={index} className={css.member}>
					<Member {...value.employee} />
				</li>
			))}
		</ul>
	);
};
