'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { HowWeAreWorkingSection } from '@/widgets/how-we-are-working-section';

import css from './index.module.css';
import type { FundsPageResponse } from './types/response';

export const Funds: NextPage<{ initialFundsPageData?: FundsPageResponse }> = ({
	initialFundsPageData,
}) => {
	const {
		publishedAt,
		heroSection,
		experienceSection,
		investingAdvantages,
		howFundWorksSection,
		howWeAreWorkingSection,
		disclaimerSection,
		infoSection,
	} = initialFundsPageData?.data ?? {};

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
			{experienceSection && (
				<HeroContainer className={css.hero}>
					<ExperienceSection
						className={css.experience}
						experience={experienceSection}
					/>
				</HeroContainer>
			)}
			<ExpertSolutionSection
				items={investingAdvantages?.factoids}
				title={investingAdvantages?.title}
			/>
			<HowWeAreWorkingSection data={howWeAreWorkingSection} />
			<ExpertSolutionSection
				title={howFundWorksSection?.title}
				items={howFundWorksSection?.factoids}
			/>
			<HelpfulInformation accordionSection={infoSection} />
			<HowWeAreWorkingSection data={disclaimerSection} oneCard />
		</>
	);
};
