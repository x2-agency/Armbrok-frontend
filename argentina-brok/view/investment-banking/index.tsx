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

export const InvestmentBanking: NextPage<{
	initialData?: InvestmentBankingPageResponse;
}> = ({ initialData }) => {
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
			<HeroContainer>
				<TitleSection
					title={initialData?.data.offerSolutionSection?.title ?? ''}
					description={
						initialData?.data.offerSolutionSection?.description ?? ''
					}
				/>
			</HeroContainer>
			<ExpertSolutionSection
				className={css.factoids}
				items={initialData?.data.ourServicesSection?.factoids}
				title={initialData?.data.ourServicesSection?.title}
				withShell
				backgroundColor="gray"
			/>
			<Review quote={initialData?.data.quoteSection} />
			<PlacementsSection
				items={MOCK_PLACEMENTS.items}
				title={MOCK_PLACEMENTS.title}
			/>
			<StatutoryDocuments
				title={initialData?.data.documentsSection?.title}
				documents={initialData?.data.documentsSection?.documents}
				columns={2}
				fileDirection="column"
			/>
		</>
	);
};
