import type { NextPage } from 'next';

import { MOCK_AWARDS } from '@/shared/model/mock-awards';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { AppSection } from '@/widgets/app-section';
import { AssetManagment } from '@/widgets/asset-managment';
import { AwardsSection } from '@/widgets/awards';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CompaniesGroup } from '@/widgets/companies-group';
import { Corporate } from '@/widgets/corporate';
import { InteractiveVideo } from '@/widgets/interactive-video';
import { NewsSectionHome } from '@/widgets/news-section';
import { Start } from '@/widgets/start';

import css from './index.module.css';
import type { HomePageData } from './types/response';

export const Home: NextPage<{ initialData?: HomePageData }> = ({
	initialData,
}) => {
	const {
		heroSection,
		advantages,
		brokerageAppCard,
		assetManagementCard,
		financialSolutionsSection,
		investingStepsSection,
		companiesSection,
		newsSection,
		interviewSection,
	} = initialData?.data ?? {};

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

			<HeroContainer className={css.hero}>
				<ExpertSolutionSection
					className={css.solution}
					backgroundColor="gray"
					items={advantages}
				/>
			</HeroContainer>
			<AppSection
				content={brokerageAppCard}
				image={brokerageAppCard?.phoneMockups}
			/>
			<AssetManagment data={assetManagementCard} />
			<Corporate cards={financialSolutionsSection} />
			<Start data={investingStepsSection} />
			<AwardsSection
				title={companiesSection?.title}
				awards={MOCK_AWARDS.awards}
				withViewAll
			/>
			<CompaniesGroup data={companiesSection} />
			<NewsSectionHome data={newsSection} />
			<InteractiveVideo data={interviewSection} />
		</>
	);
};
