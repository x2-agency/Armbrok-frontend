import type { NextPage } from 'next';

import type { SliderItemWithText } from '@/shared/types/global.types';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { MembershipSection } from '@/shared/ui/membership-section';
import { AwardsSection } from '@/widgets/awards';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CompaniesGroup } from '@/widgets/companies-group';
import { CompanyDetailsSection } from '@/widgets/company-details-section';
import { CompanyMembers } from '@/widgets/company-members';
import { CorporateEvents } from '@/widgets/corporate-events';
import { SliderSection } from '@/widgets/slider-section';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { AboutUsPageResponse } from './types/response';

export const AboutUs: NextPage<AboutUsPageResponse['data']> = ({
	heroSection,
	valuesSection,
	membershipSection,
	companiesSection,
	significantProjectsSection,
	companyStructureSection,
	corporateEventsSection,
	documentsSection,
	companyDetails,
	awardsSection,
	awards,
}) => {
	return (
		<>
			<BannerSection
				type="about"
				banner={{
					established: heroSection?.titleLabel,
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					poster: heroSection?.background,
					awards: heroSection?.factoids,
				}}
			/>
			<HeroContainer className={css.hero}>
				<ExpertSolutionSection
					items={valuesSection?.factoids}
					title={valuesSection?.title}
					withShell
					backgroundColor="white"
				/>
			</HeroContainer>
			<AwardsSection title={awardsSection?.title} awards={awards?.data} />
			<MembershipSection
				title={membershipSection?.title}
				items={membershipSection?.companies}
			/>
			<CompaniesGroup data={companiesSection} className={css.companies} />
			<SliderSection
				title={significantProjectsSection?.title}
				description={significantProjectsSection?.description}
				slider={significantProjectsSection?.slider as Array<SliderItemWithText>}
			/>
			<CompanyMembers
				title={companyStructureSection?.title}
				tabs={companyStructureSection?.tabs}
			/>
			<CorporateEvents
				title={corporateEventsSection?.title}
				events={corporateEventsSection?.events}
			/>
			<StatutoryDocuments documentsSection={documentsSection} />
			<CompanyDetailsSection
				title={companyDetails?.title ?? ''}
				items={companyDetails?.items}
			/>
		</>
	);
};
