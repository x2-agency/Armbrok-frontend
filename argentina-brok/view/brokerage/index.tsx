import type { NextPage } from 'next';

import { Container } from '@/shared/ui/container';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { MembershipSection } from '@/shared/ui/membership-section';
import { AppMobileSection } from '@/widgets/app-mobile-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';
import { Start } from '@/widgets/start';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import {
	BROKERAGE_TEXT,
	MOCK_MOBILE_APP_SECTION,
} from './model/brokerage.constants';
import type { BrokeragePageResponse } from './types/response';

export const Brokerage: NextPage<{ initialData?: BrokeragePageResponse }> = ({
	initialData,
}) => {
	if (!initialData?.data) {
		throw new Error();
	}

	return (
		<>
			<BannerSection
				type="default"
				alignContent="center"
				banner={{
					title: initialData?.data.heroSection?.title ?? '',
					description: initialData?.data.heroSection?.description ?? '',
					button: initialData?.data.heroSection?.button,
					poster: initialData?.data.heroSection?.background,
				}}
			/>
			{initialData.data.advantages &&
				initialData.data.advantages.length !== 0 && (
					<HeroContainer>
						<ExpertSolutionSection items={initialData?.data.advantages} />
					</HeroContainer>
				)}
			<AppMobileSection
				title={MOCK_MOBILE_APP_SECTION.title}
				description={MOCK_MOBILE_APP_SECTION.description}
				topCards={MOCK_MOBILE_APP_SECTION.topCards}
				bottomCards={MOCK_MOBILE_APP_SECTION.bottomCards}
			/>
			<MembershipSection
				title={initialData.data.exchangesSection?.title}
				items={initialData.data.exchangesSection?.exchanges}
			/>
			<Review quote={initialData?.data.quoteSection} />
			<Container>
				<h2 className={css.serve}>{BROKERAGE_TEXT}</h2>
			</Container>

			<Start
				steps={initialData?.data.investingStepsSection?.steps}
				title={initialData?.data.investingStepsSection?.title}
				button={initialData?.data.investingStepsSection?.button}
			/>
			<StatutoryDocuments
				title={initialData?.data.documentsSection?.title}
				documents={initialData?.data.documentsSection?.documents}
				columns={2}
				fileDirection="column"
			/>
			<HelpfulInformation
				title={initialData.data.accordionSection.title}
				items={initialData.data.accordionSection.accordions}
			/>
		</>
	);
};
