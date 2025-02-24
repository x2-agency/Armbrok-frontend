import type { NextPage } from 'next';

// Типизация данных на основе предоставленных типов
import { MOCK_AWARDS } from '@/shared/model/mock-awards';
import type { BlogData } from '@/shared/types/article';
import type {
	CompaniesSection,
	FinancialSolutionsSection,
	HeroSection,
	InvestingStepsSection,
	ItemDetail,
	PosterCard,
} from '@/shared/types/global.types';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { AppSection } from '@/widgets/app-section';
import { AssetManagment } from '@/widgets/asset-managment';
import { AwardsSection } from '@/widgets/awards';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CompaniesGroup } from '@/widgets/companies-group';
import { Corporate } from '@/widgets/corporate';
import { InteractiveVideo } from '@/widgets/interactive-video';
import type { NewsSectionProps } from '@/widgets/news-section';
import { NewsSectionHome } from '@/widgets/news-section';
import { Start } from '@/widgets/start';

import {
	HOME_APP_SECTION,
	HOME_INTERACTIVE_VIDEO,
} from './model/home.constants';
import type { HomePageResponse } from './types/response';

export const Home: NextPage<{
	initialData?: HomePageResponse;
	initialNewsCard: BlogData;
}> = ({ initialData, initialNewsCard }) => {
	const {
		data: {
			heroSection = {} as HeroSection,
			advantages = [],
			brokerageAppCard = {} as PosterCard,
			assetManagementCard = {} as ItemDetail,
			financialSolutionsSection = {} as FinancialSolutionsSection,
			investingStepsSection = {} as InvestingStepsSection,
			companiesSection = {} as CompaniesSection,
			newsSection = {} as NewsSectionProps,
		} = {},
	} = initialData || {};

	return (
		<>
			{/* Banner Section */}
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

			{/* Advantages Section */}
			{advantages.length > 0 && (
				<HeroContainer>
					<ExpertSolutionSection items={advantages} />
				</HeroContainer>
			)}

			{/* App Section */}
			<AppSection
				content={{
					title: brokerageAppCard?.title ?? '',
					description: brokerageAppCard?.description ?? '',
					IconSvg: HOME_APP_SECTION.IconSvg,
					preview: HOME_APP_SECTION.preview,
					button: HOME_APP_SECTION.button,
				}}
				image={brokerageAppCard?.phoneMockups ?? []}
			/>

			{/* Asset Management Section */}
			<AssetManagment
				title={assetManagementCard?.title ?? ''}
				description={assetManagementCard?.description ?? ''}
			/>

			{/* Corporate Section */}
			<Corporate
				title={financialSolutionsSection?.title ?? ''}
				description={financialSolutionsSection?.description ?? ''}
				instruments={financialSolutionsSection?.instruments ?? []}
			/>

			{/* Start Section */}
			<Start
				steps={investingStepsSection?.steps ?? []}
				title={investingStepsSection?.title ?? ''}
				button={investingStepsSection?.button ?? ''}
			/>

			{/* Awards Section */}
			<AwardsSection
				title={companiesSection?.title ?? ''}
				awards={MOCK_AWARDS.awards}
				withViewAll
			/>

			{/* Companies Group Section */}
			<CompaniesGroup
				title={companiesSection?.title ?? ''}
				items={companiesSection?.companies ?? []}
			/>

			{/* News Section */}
			<NewsSectionHome
				title={newsSection?.title ?? ''}
				moreButton={newsSection.moreButton}
				dataNews={initialNewsCard}
			/>

			{/* Interactive Video Section */}
			<InteractiveVideo data={HOME_INTERACTIVE_VIDEO} />
		</>
	);
};
