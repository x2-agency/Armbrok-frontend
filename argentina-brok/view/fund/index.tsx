import type { NextPage } from 'next';

import type { Factoid } from '@/shared/types/global.types';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { FundFacts } from '@/widgets/fund-facts';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { HowWeAreWorkingSection } from '@/widgets/how-we-are-working-section';
import { PortfolioStructure } from '@/widgets/portfolio-structure';
import { Review } from '@/widgets/review';

import css from './index.module.css';
import type { FundPageData } from './types/response';

export const Fund: NextPage<FundPageData> = ({
	heroSection,
	quoteSection,
	infoSection,
	disclaimer,
	investReasonsSection,
	profixDescription,
	portfolioStructureSection,
	fundFactsSection,
}) => {
	return (
		<>
			<BannerSection
				type="profix"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					panel: heroSection?.infoCard,
					icon: heroSection?.background.url ?? '',
				}}
			/>
			{profixDescription?.items && (
				<HowWeAreWorkingSection
					data={{
						title: profixDescription?.title,
						factoids: profixDescription?.items as Array<Factoid>,
					}}
				/>
			)}
			<PortfolioStructure {...portfolioStructureSection} />
			<FundFacts {...fundFactsSection} />
			<ExpertSolutionSection
				title={investReasonsSection?.title}
				items={investReasonsSection?.factoids}
				centered
			/>
			<Review quote={quoteSection} />
			<HelpfulInformation
				accordionSection={infoSection}
				className={css.accordionSection}
			/>
			<TitleSection
				className={css.accordionSection}
				title={disclaimer?.title ?? ''}
				description={disclaimer?.description}
			/>
		</>
	);
};
