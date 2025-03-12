'use client';

import parser from 'html-react-parser';

import type { EmployeeStorySection } from '@/shared/types/global.types';

import css from './index.module.css';
import EmployeeSlider from './ui/employee-slider';

export const OurPeopleSection = ({
	title,
	description,
	employeeStories,
}: EmployeeStorySection) => {
	if (!employeeStories || employeeStories.length === 0) {
		return null;
	}
	return (
		<section className={css.root}>
			<div className={css.titleBlock}>
				{title && <h2 className={css.title}>{parser(title)}</h2>}
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</div>
			<div dir="ltr">
				<EmployeeSlider
					className={css.card}
					employeeStories={employeeStories}
				/>
			</div>
		</section>
	);
};
