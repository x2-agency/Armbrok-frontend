import { HERO_DATA } from '@/shared/model/mock-banner.constants';
import { MOCK_FILES } from '@/shared/model/mock-files.constants';
import { MOCK_MEMBERSHIP } from '@/shared/model/mock-membership.constants';
import { MOCK_REVIEW } from '@/shared/model/review.constants';
import { Container } from '@/shared/ui/container';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { MembershipSection } from '@/shared/ui/membership-section';
import { AppMobileSection } from '@/widgets/app-mobile-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';
import { Start } from '@/widgets/start';
import {
	START_BUTTON,
	START_DATA,
	START_TITLE,
} from '@/widgets/start/model/start.constants';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import {
	BROKERAGE_TEXT,
	HELPFUL_INFORMATION,
	MOCK_DEFAULT_BANNER,
	MOCK_MOBILE_APP_SECTION,
} from './model/brokerage.constants';

export const Brokerage = () => {
	return (
		<>
			<BannerSection
				type="default"
				banner={MOCK_DEFAULT_BANNER}
				alignContent="end"
			/>
			<HeroContainer>
				<ExpertSolutionSection items={HERO_DATA.expertSolutions.items} />
			</HeroContainer>
			<AppMobileSection
				title={MOCK_MOBILE_APP_SECTION.title}
				description={MOCK_MOBILE_APP_SECTION.description}
				topCards={MOCK_MOBILE_APP_SECTION.topCards}
				bottomCards={MOCK_MOBILE_APP_SECTION.bottomCards}
			/>
			<MembershipSection
				title="Available Exchanges"
				items={MOCK_MEMBERSHIP.items}
				withGreyTitles
			/>
			<Review
				image={MOCK_REVIEW.image}
				reviewHead={MOCK_REVIEW.reviewHead}
				reviewFooter={MOCK_REVIEW.reviewFooter}
			/>
			<Container category="div">
				<h2 className={css.serve}>{BROKERAGE_TEXT}</h2>
			</Container>
			<Start
				href="#"
				title={START_TITLE}
				cardsNumber={START_DATA}
				button={START_BUTTON}
			/>
			<StatutoryDocuments
				title="Pricing and Terms"
				documents={MOCK_FILES.slice(0, 2)}
				columns={2}
				fileDirection="column"
			/>
			<HelpfulInformation {...HELPFUL_INFORMATION} />
		</>
	);
};
