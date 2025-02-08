import type { NextPage } from 'next';

import {
	MOCK_ABOUT_BANNER,
	HERO_DATA,
} from '@/shared/model/mock-banner.constants';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
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
		</>
	);
};
