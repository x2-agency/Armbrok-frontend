import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
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
	guarantees?: {
		items: Array<{
			icon: string;
			title: string;
		}>;
	};
};

export const HeroSection = ({
	titleSection,
	experience,
	expertSolutions,
	guarantees,
}: HeroSectionProps) => {
	return (
		<section className={css.root}>
			{titleSection && (
				<TitleSection className={css.titleSection} {...titleSection} />
			)}
			{experience && <ExperienceSection experience={experience} />}
			{expertSolutions && (
				<ExpertSolutionSection items={expertSolutions.items} />
			)}
			{guarantees && <GuaranteesSection items={guarantees.items} />}
		</section>
	);
};
