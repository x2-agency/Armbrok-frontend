'use client';

import type { NextPage } from 'next';

import { useAppendToHeaderFunds } from '@/shared/hooks/use-append-to-header-funds';
import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { ExperienceSection } from '@/shared/ui/experience-section';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { DepositaryServicesPageResponse } from './types/response';

export const DepositaryServices: NextPage<
	DepositaryServicesPageResponse['data']
> = ({
	publishedAt,
	heroSection,
	infoSection,
	primaryServicesSection,
	supplementaryServices,
	benefitsSection,
	documentsSection,
	quoteSection,
	parentFunds,
	heroFactoidSection,
}) => {
	useUpdateFooterData(publishedAt);
	useAppendToHeaderFunds({ funds: parentFunds });

	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: { ...heroSection?.button },
					poster: heroSection?.background,
				}}
				alignContent="center"
			/>
			<HeroContainer className={css.hero}>
				<TitleSection
					title={heroFactoidSection?.title ?? ''}
					description={heroFactoidSection?.description}
				/>
				<ExperienceSection
					className={css.experience}
					experience={heroFactoidSection?.factoids}
				/>
				<ExpertSolutionSection
					items={primaryServicesSection?.factoids}
					title={primaryServicesSection?.title}
					withShell
					backgroundColor="white"
				/>
				<ExpertSolutionSection
					items={supplementaryServices?.factoids}
					title={supplementaryServices?.title}
					withShell
					backgroundColor="white"
					gridClass={css.experts}
					className={css.expertsSolutions}
				/>
			</HeroContainer>
			<GuaranteesSection
				className={css.benefits}
				title={benefitsSection?.title}
				items={benefitsSection?.factoids}
			/>
			<Review quote={quoteSection} />
			<StatutoryDocuments
				documentsSection={documentsSection}
				columns={2}
				fileDirection="column"
				className={css.documents}
			/>
			<HelpfulInformation
				accordionSection={infoSection}
				className={css.helpful}
			/>
		</>
	);
};
