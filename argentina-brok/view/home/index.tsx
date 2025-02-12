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
import {
	CARDS,
	CORPORATE_DESCRIPTION,
	CORPORATE_TITLE,
} from '@/widgets/corporate/model/corporate';
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
	HOME_ASSETS_BUTTON,
	HOME_ASSETS_DESCRIPTION,
	HOME_ASSETS_IMAGE,
	HOME_ASSETS_TITLE,
	HOME_INTERACTIVE_VIDEO,
} from './model/home.constants';
import type { HomePageResponse } from './types/response';

export const Home: NextPage<{ initialData?: HomePageResponse }> = ({
	initialData,
}) => {
	console.log(initialData);
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
			<AppSection content={HOME_APP_SECTION} image={HOME_APP_SECTION.image} />
			<AssetManagment
				href="#"
				title={HOME_ASSETS_TITLE}
				description={HOME_ASSETS_DESCRIPTION}
				buttonText={HOME_ASSETS_BUTTON}
				image={HOME_ASSETS_IMAGE}
			/>
			<Corporate
				title={CORPORATE_TITLE}
				description={CORPORATE_DESCRIPTION}
				cards={CARDS}
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
