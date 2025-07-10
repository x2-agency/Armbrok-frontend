'use client';

import type { NextPage } from 'next';

import { useAppendToHeaderFunds } from '@/shared/hooks/use-append-to-header-funds';
import useMediaQuery from '@/shared/hooks/use-media-query';
import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { HowWeAreWorkingSection } from '@/widgets/how-we-are-working-section';
import { ParentFunds } from '@/widgets/parent-funds';

import css from './index.module.css';
import type { FundsPageResponse } from './types/response';

export const Funds: NextPage<{ initialFundsPageData?: FundsPageResponse }> = ({
	initialFundsPageData,
}) => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	const {
		publishedAt,
		heroSection,
		experienceSection,
		investingAdvantages,
		howFundWorksSection,
		howWeAreWorkingSection,
		disclaimerSection,
		infoSection,
		parentFunds,
		fundListTitle,
	} = initialFundsPageData?.data ?? {};

	useUpdateFooterData(publishedAt);
	useAppendToHeaderFunds({ funds: parentFunds });

	return (
		<>
			<BannerSection
				type="default"
				alignContent="center"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: { ...heroSection?.button },
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
				className={css.expert}
				items={investingAdvantages?.factoids}
				title={investingAdvantages?.title}
				centered={isMobile}
				bigFormatIcon={isMobile}
			/>
			<ParentFunds head={{ title: fundListTitle }} funds={parentFunds} />
			<HowWeAreWorkingSection
				data={howWeAreWorkingSection}
				className={css.howFundWorks}
			/>
			<ExpertSolutionSection
				title={howFundWorksSection?.title}
				items={howFundWorksSection?.factoids}
				centered
				bigFormatIcon
				className={css.howFundWorks}
			/>
			<HelpfulInformation accordionSection={infoSection} className={css.help} />
			<HowWeAreWorkingSection
				data={disclaimerSection}
				oneCard
				className={css.howWeWorking}
			/>
		</>
	);
};
