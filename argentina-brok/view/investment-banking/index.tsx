import type { NextPage } from 'next';

import { MOCK_PLACEMENTS } from '@/shared/model/placements.constants';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { PlacementsSection } from '@/widgets/placements-section';
import { Review } from '@/widgets/review';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { InvestmentBankingPageResponse } from './types/response';

export const InvestmentBanking: NextPage<
	InvestmentBankingPageResponse['data']
> = ({
	heroSection,
	offerSolutionSection,
	ourServicesSection,
	quoteSection,
	documentsSection,
}) => {
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
			<HeroContainer>
				<TitleSection
					title={offerSolutionSection?.title ?? ''}
					description={offerSolutionSection?.description ?? ''}
				/>
			</HeroContainer>
			<ExpertSolutionSection
				className={css.factoids}
				items={ourServicesSection?.factoids}
				title={ourServicesSection?.title}
				withShell
				backgroundColor="gray"
			/>
			<Review quote={quoteSection} />
			<PlacementsSection
				items={MOCK_PLACEMENTS.items}
				title={MOCK_PLACEMENTS.title}
			/>
			<StatutoryDocuments
				title={documentsSection?.title}
				documents={documentsSection?.documents}
				columns={2}
				fileDirection="column"
			/>
		</>
	);
};
