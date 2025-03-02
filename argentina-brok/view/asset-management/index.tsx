import type { NextPage } from 'next';

import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { AssetManagment } from '@/widgets/asset-managment';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import { TITLE_SECTION_ASSET } from './model/asset-managment.constants';
import type { AssetManagementPageResponse } from './types/response';

export const AssetManagement: NextPage<{
	initialData?: AssetManagementPageResponse;
}> = ({ initialData }) => {
	if (!initialData?.data) {
		throw new Error();
	}

	const {
		heroSection,
		experienceSection,
		benefitsSection,
		quoteSection,
		wealthManagementSection,
		assetManagementCard,
		howWeAreWorking,
		documentsSection,
		infoSection,
	} = initialData?.data ?? {};

	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: heroSection?.button,
					poster: heroSection?.background,
				}}
				alignContent="start"
			/>
			{experienceSection && (
				<HeroContainer className={css.hero}>
					<TitleSection
						title={experienceSection.title ?? ''}
						description={experienceSection.description}
					/>
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
			<Review quote={quoteSection} />
			<AssetManagment data={assetManagementCard} />
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
