'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import type {
	AwardsResponse,
	ParentFundProps,
} from '@/shared/types/global.types';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { AppSection } from '@/widgets/app-section';
import { AssetManagment } from '@/widgets/asset-managment';
import { AwardsSection } from '@/widgets/awards';
import { Corporate } from '@/widgets/corporate';
import { HomePreview } from '@/widgets/home-preview/ui';
import { InteractiveVideo } from '@/widgets/interactive-video';
import { NewsSectionHome } from '@/widgets/news-section';
import { ParentFunds } from '@/widgets/parent-funds';
import { Start } from '@/widgets/start';

import css from './index.module.css';
import { HOME_FUNDS_HEAD } from './model/home.constants';
import type { HomePageData } from './types/response';

export const Home: NextPage<{
	initialData?: HomePageData;
	initialAwards?: AwardsResponse;
	parentFunds?: Array<ParentFundProps>;
}> = ({ initialData, initialAwards, parentFunds }) => {
	const {
		publishedAt,
		heroSection,
		advantages,
		brokerageAppCard,
		assetManagementCard,
		financialSolutionsSection,
		investingStepsSection,
		// companiesSection,
		newsSection,
		interviewSection,
		awardsSection,
	} = initialData?.data ?? {};
	useUpdateFooterData(publishedAt);
	return (
		<>
			<HomePreview heroSection={heroSection} />
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
			<ParentFunds head={HOME_FUNDS_HEAD} funds={parentFunds} mode="slider" />
			<AssetManagment data={assetManagementCard} />
			<Corporate cards={financialSolutionsSection} />
			<Start data={investingStepsSection} />
			<AwardsSection
				title={awardsSection?.title}
				awards={initialAwards?.data}
				buttonText={awardsSection?.buttonText}
				buttonLimit={4}
				awardsTotal={initialAwards?.meta.pagination.total ?? 4}
			/>
			{/* <CompaniesGroup homePage data={companiesSection} /> */}
			<NewsSectionHome data={newsSection} />
			<InteractiveVideo data={interviewSection} />
		</>
	);
};
