import type { NextPage } from 'next';

import { ARMBROK_TEAM } from '@/shared/model/armbrok-team.constants';
import { MOCK_AWARDS } from '@/shared/model/mock-awards';
import {
	MOCK_EVENTS_DATA,
	MOCK_EVENTS_TITLE,
} from '@/shared/model/mock-events.constants';
import {
	MOCK_FILES,
	MOCK_FILES_TITLE,
} from '@/shared/model/mock-files.constants';
// import { MOCK_MEMBERSHIP } from '@/shared/model/mock-membership.constants';
import { SLIDER_DATA } from '@/shared/model/slider.constants';
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

export const AboutUs: NextPage<{ initialData?: AboutUsPageResponse }> = ({
	initialData,
}) => {
	console.log(initialData);

	return (
		<>
			<BannerSection
				type="about"
				banner={{
					established: initialData?.data.heroSection?.titleLabel,
					title: initialData?.data.heroSection?.title ?? '',
					description: initialData?.data.heroSection?.description ?? '',
					poster: initialData?.data.heroSection?.background,
					awards: initialData?.data.heroSection?.factoids,
				}}
			/>
			<HeroContainer>
				<ExpertSolutionSection
					items={initialData?.data.valuesSection?.factoids}
					title={initialData?.data.valuesSection?.title}
					withShell
					backgroundColor="white"
				/>
			</HeroContainer>
			<AwardsSection
				title={MOCK_AWARDS.title}
				awards={MOCK_AWARDS.awards}
				withViewAll
			/>
			<MembershipSection
				title={initialData?.data.membershipSection?.title}
				items={initialData?.data.membershipSection?.companies}
			/>
			<CompaniesGroup
				title={initialData?.data.companiesSection?.title}
				items={initialData?.data.companiesSection?.companies}
				className={css.companies}
			/>
			<SliderSection
				title={initialData?.data.significantProjectsSection?.title}
				description={initialData?.data.significantProjectsSection?.description}
				slider={
					initialData?.data.significantProjectsSection
						?.slider as Array<SliderItemWithText>
				}
			/>
			<CompanyMembers members={ARMBROK_TEAM} />
			<CorporateEvents title={MOCK_EVENTS_TITLE} events={MOCK_EVENTS_DATA} />
			<StatutoryDocuments title={MOCK_FILES_TITLE} documents={MOCK_FILES} />
			<CompanyDetailsSection
				title={initialData?.data.companyDetails?.title ?? ''}
				factoids={initialData?.data.companyDetails?.factoids}
			/>
		</>
	);
};
