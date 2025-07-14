import cx from 'clsx';

import type { Factoid } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { ExperienceItem } from '@/shared/ui/experience-item';

import css from './index.module.css';

export type ExperienceSectionProps = {
	className?: string;
	experience: Array<Factoid>;
};

export const ExperienceSection = ({
	className,
	experience,
}: ExperienceSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{experience.map((value, index) => (
				<ExperienceItem
					key={index}
					title={value.title}
					description={value.description}
				/>
			))}
		</Container>
	);
};
