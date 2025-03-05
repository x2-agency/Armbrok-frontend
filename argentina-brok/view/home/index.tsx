'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
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
		awards,
	} = initialData?.data ?? {};

	useUpdateFooterData(publishedAt);

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
			<AwardsSection title={awardSection?.title} awards={awards?.data} />
			<CompaniesGroup data={companiesSection} />
			<NewsSectionHome data={newsSection} />
			<InteractiveVideo data={interviewSection} />
		</>
	);
};
