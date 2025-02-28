import type { NextPage } from 'next';

// Типизация данных на основе предоставленных типов
import { MOCK_AWARDS } from '@/shared/model/mock-awards';
import type {
	CompaniesSection,
	HeroSection,
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
import { NewsSectionHome } from '@/widgets/news-section';
import { Start } from '@/widgets/start';

import type {
	AssetManagementCardProps,
	BrokerageAppCardProps,
	FinancialSolutionsSectionProps,
	HomePageResponse,
	InterviewProps,
	InvestingStepsSectionProps,
	NewsProps,
} from './types/response';

export const Home: NextPage<{
	initialData?: HomePageResponse;
}> = ({ initialData }) => {
	const {
		data: {
			heroSection = {} as HeroSection,
			advantages = [],
			brokerageAppCard = {} as BrokerageAppCardProps,
			assetManagementCard = {} as AssetManagementCardProps,
			financialSolutionsSection = {} as FinancialSolutionsSectionProps,
			investingStepsSection = {} as InvestingStepsSectionProps,
			companiesSection = {} as CompaniesSection,
			newsSection = {} as NewsProps,
			interviewSection = {} as InterviewProps,
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

			<AppSection
				content={brokerageAppCard}
				image={brokerageAppCard.phoneMockups}
			/>

			<AssetManagment data={assetManagementCard} />

			<Corporate cards={financialSolutionsSection} />

			<Start data={investingStepsSection} />

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

			<NewsSectionHome data={newsSection} />

			<InteractiveVideo data={interviewSection} />
		</>
	);
};
