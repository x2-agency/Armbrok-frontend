'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { MembershipSection } from '@/shared/ui/membership-section';
import { AppMobileSection } from '@/widgets/app-mobile-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CountriesSection } from '@/widgets/countries-section';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { InstrumentsSection } from '@/widgets/instruments-section';
import { PortfolioSection } from '@/widgets/portfolio-section';
import { Review } from '@/widgets/review';
import RunningTextSection from '@/widgets/running-text-section';
import { Start } from '@/widgets/start';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { BrokeragePageResponse } from './types/response';

export const Brokerage: NextPage<{ initialData?: BrokeragePageResponse }> = ({
	initialData,
}) => {
	if (!initialData?.data) {
		throw new Error();
	}

	const {
		publishedAt,
		heroSection,
		advantages,
		exchangesSection,
		instrumentsSection,
		mobileAppSection,
		portfolioSection,
		quoteSection,
		runningTextSection,
		countriesSection,
		investingStepsSection,
		documentsSection,
		infoSection,
	} = initialData?.data ?? {};

	useUpdateFooterData(publishedAt);

	return (
		<>
			<BannerSection
				type="default"
				alignContent="center"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: { ...heroSection?.button, isLoginButton: true },
					poster: heroSection?.background,
				}}
			/>
			{advantages && advantages.length !== 0 && (
				<HeroContainer>
					<ExpertSolutionSection items={advantages} className={css.solution} />
				</HeroContainer>
			)}

			<MembershipSection
				title={exchangesSection?.title}
				items={exchangesSection?.exchanges}
			/>
			<InstrumentsSection instrumentsSection={instrumentsSection} />
			<AppMobileSection data={mobileAppSection} />
			<PortfolioSection cards={portfolioSection} />

			<Review quote={quoteSection} />
			<RunningTextSection
				interval={350}
				runningTextSection={runningTextSection}
			/>
			<CountriesSection residenceCountriesSection={countriesSection} />
			<Start data={investingStepsSection} />
			<StatutoryDocuments
				documentsSection={documentsSection}
				columns={2}
				fileDirection="column"
			/>
			<HelpfulInformation accordionSection={infoSection} />
		</>
	);
};
