import { ExperienceSection } from '@/shared/ui/experience-section';
import type { ExperienceSectionProps } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import type { ExpertSolutionSectionProps } from '@/shared/ui/expert-solutions-section';
import type { GuaranteesSectionProps } from '@/shared/ui/guarantees-section';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
import { TitleSection } from '@/shared/ui/title-section';
import type { TitleSectionProps } from '@/shared/ui/title-section';

import css from './index.module.css';

type HeroSectionProps = {
	titleSection?: TitleSectionProps['data'];
	experience?: ExperienceSectionProps['experience'];
	expertSolutions?: ExpertSolutionSectionProps;
	guarantees?: GuaranteesSectionProps['items'];
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
				<TitleSection className={css.titleSection} data={titleSection} />
			)}
			{experience && <ExperienceSection experience={experience} />}
			{expertSolutions && <ExpertSolutionSection {...expertSolutions} />}
			{guarantees && <GuaranteesSection items={guarantees} />}
		</section>
	);
};
