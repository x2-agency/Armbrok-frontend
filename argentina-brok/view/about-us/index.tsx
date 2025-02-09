import type { NextPage } from 'next';

import { ARMBROK_TEAM } from '@/shared/model/armbrok-team.constants';
import { MOCK_AWARDS } from '@/shared/model/mock-awards';
import {
	MOCK_ABOUT_BANNER,
	HERO_DATA,
} from '@/shared/model/mock-banner.constants';
import { MOCK_COMPANIES } from '@/shared/model/mock-companies-group';
import { COMPANY_DETAILS } from '@/shared/model/mock-details.constants';
import {
	MOCK_FILES,
	MOCK_FILES_TITLE,
} from '@/shared/model/mock-files.constants';
import { MOCK_MEMBERSHIP } from '@/shared/model/mock-membership.constants';
import { SLIDER_DATA } from '@/shared/model/slider.constants';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { MembershipSection } from '@/shared/ui/membership-section';
import { AwardsSection } from '@/widgets/awards';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CompaniesGroup } from '@/widgets/companies-group';
import { CompanyDetailsSection } from '@/widgets/company-details-section';
import { CompanyMembers } from '@/widgets/company-members';
import { SliderSection } from '@/widgets/slider-section';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';

export const AboutUs: NextPage = () => {
	return (
		<>
			<BannerSection type="about" banner={MOCK_ABOUT_BANNER} />
			<HeroContainer>
				<ExpertSolutionSection
					items={HERO_DATA.expertSolutions.items}
					title="Our Expertise"
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
				title="Membership"
				items={MOCK_MEMBERSHIP.items}
				className={css.membership}
			/>
			<CompaniesGroup
				title={MOCK_COMPANIES.title}
				items={MOCK_COMPANIES.items}
				className={css.companies}
			/>
			<SliderSection {...SLIDER_DATA} />
			<MembershipSection
				title="Supporting Socially Significant Projects"
				description="We Support Educational, Cultural, and Sports Initiatives"
				items={MOCK_MEMBERSHIP.items}
				className={css.membership}
				withGreyTitles
			/>
			<CompanyMembers members={ARMBROK_TEAM} />
			<StatutoryDocuments title={MOCK_FILES_TITLE} documents={MOCK_FILES} />
			<CompanyDetailsSection {...COMPANY_DETAILS} />
		</>
	);
};
