import type { NextPage } from 'next';

import {
	MOCK_ABOUT_BANNER,
	HERO_DATA,
} from '@/shared/model/mock-banner.constants';
import { MOCK_COMPANIES } from '@/shared/model/mock-companies-group';
import { MOCK_MEMBERSHIP } from '@/shared/model/mock-membership.constants';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { MembershipSection } from '@/shared/ui/membership-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CompaniesGroup } from '@/widgets/companies-group';

import css from './index.module.css';

export const AboutUs: NextPage = () => {
	return (
		<>
			<BannerSection type="about" banner={MOCK_ABOUT_BANNER} />
			<section className={css.hero}>
				<ExpertSolutionSection
					items={HERO_DATA.expertSolutions.items}
					title="Our Expertise"
					withShell
					backgroundColor="white"
				/>
			</section>
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
			<MembershipSection
				title="Supporting Socially Significant Projects"
				description="We Support Educational, Cultural, and Sports Initiatives"
				items={MOCK_MEMBERSHIP.items}
				className={css.membership}
				withGreyTitles
			/>
		</>
	);
};
