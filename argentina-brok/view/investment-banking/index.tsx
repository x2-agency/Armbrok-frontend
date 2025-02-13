import type { NextPage } from 'next';

// import { MOCK_INVESTMENT_BANKING_BANNER } from '@/shared/model/mock-banner.constants';
// import { HERO_DATA } from '@/shared/model/mock-banner.constants';
import { MOCK_FILES } from '@/shared/model/mock-files.constants';
import { MOCK_PLACEMENTS } from '@/shared/model/placements.constants';
// import { MOCK_REVIEW } from '@/shared/model/review.constants';
// import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
// import { HeroContainer } from '@/shared/ui/hero-container';
// import { TitleSection } from '@/shared/ui/title-section';
// import { BannerSection } from '@/widgets/banner-section/ui';
import { PlacementsSection } from '@/widgets/placements-section';
// import { Review } from '@/widgets/review';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

// import css from './index.module.css';

export const InvestmentBanking: NextPage = () => {
	return (
		<>
			{/* <BannerSection
				type="default"
				banner={MOCK_INVESTMENT_BANKING_BANNER}
				alignContent="end"
			/>
			<HeroContainer>
				<TitleSection data={HERO_DATA.titleSection} />
			</HeroContainer> */}
			{/* <ExpertSolutionSection
				items={HERO_DATA.expertSolutions.items}
				title="Our Services"
				withShell
				backgroundColor="gray"
				className={css.experts}
			/> */}
			<PlacementsSection
				items={MOCK_PLACEMENTS.items}
				title={MOCK_PLACEMENTS.title}
			/>
			{/* <Review
				image={MOCK_REVIEW.image}
				reviewHead={MOCK_REVIEW.reviewHead}
				reviewFooter={MOCK_REVIEW.reviewFooter}
			/> */}
			<StatutoryDocuments
				title="Pricing and Terms"
				documents={MOCK_FILES.slice(0, 2)}
				columns={2}
				fileDirection="column"
			/>
		</>
	);
};
