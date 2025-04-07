import type { NextPage } from 'next';

import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';

import type { FundPageData } from './types/response';

export const Fund: NextPage<FundPageData> = ({
	heroSection,
	quoteSection,
	infoSection,
	disclaimer,
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
			<Review quote={quoteSection} />
			<HelpfulInformation accordionSection={infoSection} />
			<TitleSection
				title={disclaimer?.title ?? ''}
				description={disclaimer?.description}
			/>
		</>
	);
};
