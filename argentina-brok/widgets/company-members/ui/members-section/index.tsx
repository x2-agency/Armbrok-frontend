import type { EmployeeList } from '@/shared/types/global.types';
import { Member } from '@/widgets/company-members/ui/member';

import css from './index.module.css';

export const CompanyMembersSection = ({ employees }: EmployeeList) => {
	console.log(employees);
	return (
		<section className={css.root}>
			{employees.map((value, index) => (
				<Member key={index} {...value} />
			))}
		</section>
	);
};
