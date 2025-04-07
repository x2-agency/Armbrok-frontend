import type { NextPage } from 'next';

import type { Factoid } from '@/shared/types/global.types';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { HowWeAreWorkingSection } from '@/widgets/how-we-are-working-section';
import { Review } from '@/widgets/review';

import type { FundPageData } from './types/response';

export const Fund: NextPage<FundPageData> = ({
	heroSection,
	quoteSection,
	infoSection,
	disclaimer,
	investReasonsSection,
	profixDescription,
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
			<ExpertSolutionSection
				title={investReasonsSection?.title}
				items={investReasonsSection?.factoids}
				centered
			/>
			<Review quote={quoteSection} />
			<HelpfulInformation accordionSection={infoSection} />
			<TitleSection
				title={disclaimer?.title ?? ''}
				description={disclaimer?.description}
			/>
		</>
	);
};
