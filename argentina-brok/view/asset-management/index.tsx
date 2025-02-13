import type { NextPage } from 'next';

import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
// import {
// 	HOME_ASSETS_BUTTON,
// 	HOME_ASSETS_DESCRIPTION,
// 	HOME_ASSETS_IMAGE,
// 	HOME_ASSETS_TITLE,
// } from '@/view/home/model/home.constants';
// import { AssetManagment } from '@/widgets/asset-managment';
import { AssetManagment } from '@/widgets/asset-managment';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';

import css from './index.module.css';
import {
	MOCK_DEFAULT_BANNER,
	TITLE_SECTION_ASSET,
} from './model/asset-managment.constants';
import type { AssetManagementPageResponse } from './types/response';

export const AssetManagement: NextPage<{
	initialData?: AssetManagementPageResponse;
}> = ({ initialData }) => {
	if (!initialData?.data) {
		throw new Error();
	}

	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: initialData?.data.heroSection?.title ?? '',
					description: initialData?.data.heroSection?.description ?? '',
					button: initialData?.data.heroSection?.button,
					poster: initialData?.data.heroSection?.background,
				}}
				alignContent="start"
			/>
			{initialData.data.experienceSection && (
				<HeroContainer className={css.hero}>
					<TitleSection
						title={initialData.data.experienceSection.title}
						description={initialData.data.experienceSection.description}
					/>
					<ExperienceSection
						className={css.experience}
						experience={TITLE_SECTION_ASSET}
					/>
				</HeroContainer>
			)}
			<ExpertSolutionSection
				items={initialData.data.benefitsSection?.factoids}
				title={initialData.data.benefitsSection?.title}
				withShell
				backgroundColor="white"
				className={css.experts}
			/>
			<Review quote={initialData?.data.quoteSection} />
			<AssetManagment
				title={MOCK_DEFAULT_BANNER.title}
				// description={MOCK_DEFAULT_BANNER.description}
				// mediaContent={initialData?.data.wealthManagementSection?.mediaContent}
			/>
			<ExpertSolutionSection
				className={css.managementSection}
				gridClass={css.management}
				withShell
				title={initialData.data.wealthManagementSection?.title}
				items={initialData.data.wealthManagementSection?.factoids}
			/>
			<ExpertSolutionSection
				className={css.managementSection}
				gridClass={css.management}
				withShell
				title={initialData.data.howWeAreWorking?.title}
				items={initialData.data.howWeAreWorking?.factoids}
			/>
			<HelpfulInformation
				title={initialData.data.infoSection?.title}
				items={initialData.data.infoSection?.accordions}
			/>
		</>
	);
};
