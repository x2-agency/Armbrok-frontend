import type { NextPage } from 'next';

import { MOCK_FILES } from '@/shared/model/mock-files.constants';
import { MOCK_MEMBERSHIP } from '@/shared/model/mock-membership.constants';
import { MOCK_REVIEW } from '@/shared/model/review.constants';
import { Container } from '@/shared/ui/container';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { MembershipSection } from '@/shared/ui/membership-section';
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
import { HELPFUL_INFORMATION } from './model/brokerage.constants';
import { BROKERAGE_TEXT } from './model/brokerage.constants';
import type { BrokeragePageResponse } from './types/response';

export const Brokerage: NextPage<{ initialData?: BrokeragePageResponse }> = ({
	initialData,
}) => {
	console.log(initialData);

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
			{/*
			<HeroContainer>
				<ExpertSolutionSection items={HERO_DATA.expertSolutions.items} />
			</HeroContainer> */}
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
			<Container>
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
