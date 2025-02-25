import type { EmployeeList } from '@/shared/types/global.types';
import { Member } from '@/widgets/company-members/ui/member';

import css from './index.module.css';

export const CompanyMembersSection = ({ employees }: EmployeeList) => {
	return (
		<ul className={css.root}>
			{employees.map((value, index) => (
				<li key={index} className={css.member}>
					<Member {...value} />
				</li>
			))}
		</ul>
	);
};
