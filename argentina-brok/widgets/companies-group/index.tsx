import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

type CompaniesGroupProps = {
	title?: string;
	items: Array<{
		icon: string;
	}>;
	className?: string;
};

export const CompaniesGroup = ({
	title,
	items,
	className,
}: CompaniesGroupProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.companies}>
				{items.map((value, index) => (
					<li key={index} className={css.company}>
						<img
							src={value.icon}
							alt="company"
							className={css.companyIcon}
							draggable={false}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
