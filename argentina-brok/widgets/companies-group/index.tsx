/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { Container } from '@/shared/ui/container';
import type { CompaniesSectionProps } from '@/view/home/types/response';

import css from './index.module.css';

type CompaniesGroupProps = {
	data?: CompaniesSectionProps;
	className?: string;
	homePage?: boolean;
};

export const CompaniesGroup = ({
	data,
	className,
	homePage = false,
}: CompaniesGroupProps) => {
	const { title, companies = [] } = data ?? {};
	if (!companies || companies.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.companies}>
				{companies.map((value, index) => (
					<li
						key={index}
						className={cx(css.company, { [css.homePageCompany]: homePage })}
					>
						<img
							src={value.logo.url}
							className={css.companyIcon}
							draggable={false}
						/>
						{value.colorLogo?.url && (
							<img
								src={value.colorLogo.url}
								className={css.hoverIcon}
								draggable={false}
							/>
						)}
						{value.link && (
							<Link href={value.link} className={css.link} target="_blank" />
						)}
					</li>
				))}
			</ul>
		</Container>
	);
};
