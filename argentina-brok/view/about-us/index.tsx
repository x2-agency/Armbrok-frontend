import type { NextPage } from 'next';

import {
	MOCK_ABOUT_BANNER,
	HERO_DATA,
} from '@/shared/model/mock-banner.constants';
import { MOCK_MEMBERSHIP } from '@/shared/model/mock-membership.constants';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { MembershipSection } from '@/shared/ui/membership-section';
import { BannerSection } from '@/widgets/banner-section/ui';

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
		</>
	);
};
