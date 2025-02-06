import { Container } from '@/shared/ui/container';
import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { TitleSection } from '@/shared/ui/title-section';

import css from './index.module.css';

type HeroSectionProps = {
	titleSection?: {
		title: string;
		description: string;
	};
	experience?: Array<{
		title: string;
		description: string;
	}>;
	expertSolutions?: {
		title?: string;
		items: Array<{
			icon: string;
			title: string;
			description: string;
		}>;
	};
};

export const HeroSection = ({
	titleSection,
	experience,
	expertSolutions,
}: HeroSectionProps) => {
	return (
		<Container className={css.root}>
			{titleSection && (
				<TitleSection className={css.titleSection} {...titleSection} />
			)}
			{experience && <ExperienceSection experience={experience} />}
			{expertSolutions && (
				<ExpertSolutionSection items={expertSolutions.items} />
			)}
		</Container>
	);
};
