'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import type { AwardsResponse } from '@/shared/types/global.types';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { AppSection } from '@/widgets/app-section';
import { AssetManagment } from '@/widgets/asset-managment';
import { AwardsSection } from '@/widgets/awards';
import { CompaniesGroup } from '@/widgets/companies-group';
import { Corporate } from '@/widgets/corporate';
import { HomePreview } from '@/widgets/home-preview/ui';
import { InteractiveVideo } from '@/widgets/interactive-video';
import { NewsSectionHome } from '@/widgets/news-section';
import { Start } from '@/widgets/start';

import css from './index.module.css';
import type { HomePageData } from './types/response';

export const Home: NextPage<{
	initialData?: HomePageData;
	initialAwards?: AwardsResponse;
}> = ({ initialData, initialAwards }) => {
	const {
		publishedAt,
		heroSection,
		advantages,
		brokerageAppCard,
		assetManagementCard,
		financialSolutionsSection,
		investingStepsSection,
		companiesSection,
		newsSection,
		interviewSection,
		awardSection,
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
			<AssetManagment data={assetManagementCard} />
			<Corporate cards={financialSolutionsSection} />
			<Start data={investingStepsSection} />
			<AwardsSection
				title={awardSection?.title}
				awards={initialAwards?.data}
				buttonText={awardSection?.buttonText}
				buttonLimit={4}
				awardsTotal={initialAwards?.meta.pagination.total ?? 4}
			/>
			<CompaniesGroup data={companiesSection} />
			<NewsSectionHome data={newsSection} />
			<InteractiveVideo data={interviewSection} />
		</>
	);
};
