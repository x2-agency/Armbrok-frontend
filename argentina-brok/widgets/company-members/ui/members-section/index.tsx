import type { EmployeeList } from '@/shared/types/global.types';
import { Member } from '@/widgets/company-members/ui/member';

import css from './index.module.css';

export const CompanyMembersSection = ({ employees }: EmployeeList) => {
	console.log(employees);
	return (
		<ul className={css.root}>
			{employees.map((value, index) => (
				<li key={index}>
					<Member {...value} />
				</li>
			))}
		</ul>
	);
};
