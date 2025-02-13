import type { NextPage } from 'next';

import { HOME_NEWS } from '@/entities/news-card/model/news.constants';
import { MOCK_AWARDS } from '@/shared/model/mock-awards';
import { MOCK_COMPANIES } from '@/shared/model/mock-companies-group';
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
import {
	START_BUTTON,
	START_DATA,
	START_TITLE,
} from '@/widgets/start/model/start.constants';

import {
	HOME_APP_SECTION,
	HOME_INTERACTIVE_VIDEO,
} from './model/home.constants';
import type { HomePageResponse } from './types/response';

export const Home: NextPage<{ initialData?: HomePageResponse }> = ({
	initialData,
}) => {
	return (
		<>
			<BannerSection
				type="default"
				alignContent="end"
				banner={{
					title: initialData?.data.heroSection?.title ?? '',
					description: initialData?.data.heroSection?.description ?? '',
					button: initialData?.data.heroSection?.button,
					poster: initialData?.data.heroSection?.background,
				}}
			/>
			{initialData?.data.advantages && (
				<HeroContainer>
					<ExpertSolutionSection items={initialData?.data.advantages} />
				</HeroContainer>
			)}
			<AppSection
				content={{
					title: initialData?.data.brokerageAppCard?.title ?? '',
					description: initialData?.data.brokerageAppCard?.description ?? '',
					IconSvg: HOME_APP_SECTION.IconSvg,
					preview: HOME_APP_SECTION.preview,
					button: HOME_APP_SECTION.button,
				}}
				image={initialData?.data.brokerageAppCard?.mediaContent || undefined}
			/>
			<AssetManagment
				title={initialData?.data.assetManagementCard?.title ?? ''}
				description={initialData?.data.assetManagementCard?.description ?? ''}
				mediaContent={initialData?.data.assetManagementCard?.mediaContent}
			/>
			<Corporate
				title={initialData?.data.financialSolutionsSection?.title ?? ''}
				description={
					initialData?.data.financialSolutionsSection?.description ?? ''
				}
				instruments={initialData?.data.financialSolutionsSection?.instruments}
			/>
			<Start
				href="#"
				title={START_TITLE}
				cardsNumber={START_DATA}
				button={START_BUTTON}
			/>
			<AwardsSection
				title={MOCK_AWARDS.title}
				awards={MOCK_AWARDS.awards}
				withViewAll
			/>
			<CompaniesGroup
				title={MOCK_COMPANIES.title}
				items={MOCK_COMPANIES.items}
			/>
			<NewsSectionHome dataNews={HOME_NEWS} />
			<InteractiveVideo data={HOME_INTERACTIVE_VIDEO} />
		</>
	);
};
