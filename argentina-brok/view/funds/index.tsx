import type { NextPage } from 'next';

import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { TITLE_SECTION_ASSET } from '@/view/asset-management/model/asset-managment.constants';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { FundsPageResponse } from './types/response';

export const Funds: NextPage<{ initialFundsPageData?: FundsPageResponse }> = ({
	initialFundsPageData,
}) => {
	const {
		heroSection,
		experienceSection,
		benefitsSection,
		wealthManagementSection,
		howWeAreWorking,
		documentsSection,
		infoSection,
	} = initialFundsPageData?.data ?? {};
	console.log(initialFundsPageData?.data.experienceSection);
	return (
		<>
			<BannerSection
				type="default"
				alignContent="end"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: heroSection?.button,
					poster: heroSection?.background,
				}}
			/>
			{experienceSection && (
				<HeroContainer className={css.hero}>
					<TitleSection title={experienceSection.title ?? ''} />
					<ExperienceSection
						className={css.experience}
						experience={TITLE_SECTION_ASSET}
					/>
				</HeroContainer>
			)}
			<ExpertSolutionSection
				items={benefitsSection?.factoids}
				title={benefitsSection?.title}
				withShell
				backgroundColor="white"
				className={css.experts}
			/>
			<ExpertSolutionSection
				className={css.managementSection}
				gridClass={css.management}
				withShell
				title={wealthManagementSection?.title}
				items={wealthManagementSection?.factoids}
			/>
			<ExpertSolutionSection
				className={css.managementSection}
				gridClass={css.management}
				withShell
				title={howWeAreWorking?.title}
				items={howWeAreWorking?.factoids}
			/>
			<StatutoryDocuments
				documentsSection={documentsSection}
				columns={2}
				fileDirection="column"
			/>
			<HelpfulInformation accordionSection={infoSection} />
		</>
	);
};
