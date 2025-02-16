import type { Employee } from '@/shared/types/global.types';
import { Member } from '@/widgets/company-members/ui/member';

import css from './index.module.css';

export const CompanyMembersSection = (employee: Array<Employee>) => {
	return (
		<section className={css.root}>
			{employee.map((value, index) => (
				<Member key={index} {...value} />
			))}
		</section>
	);
};
