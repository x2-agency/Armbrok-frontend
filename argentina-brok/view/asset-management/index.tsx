import { HERO_DATA } from '@/shared/model/mock-banner.constants';
import { MOCK_REVIEW } from '@/shared/model/review.constants';
import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import {
	HOME_ASSETS_BUTTON,
	HOME_ASSETS_DESCRIPTION,
	HOME_ASSETS_IMAGE,
	HOME_ASSETS_TITLE,
} from '@/view/home/model/home.constants';
import { AssetManagment } from '@/widgets/asset-managment';
import { BannerSection } from '@/widgets/banner-section/ui';
import { Review } from '@/widgets/review';

import { MOCK_DEFAULT_BANNER } from './model/asset-managment.constants';

export const AssetManagement = () => {
	return (
		<>
			<BannerSection
				type="default"
				banner={MOCK_DEFAULT_BANNER}
				alignContent="start"
			/>
			<HeroContainer>
				{/* <ExperienceSection experience={HERO_DATA.experience} /> */}
				<ExpertSolutionSection
					items={HERO_DATA.expertSolutions.items}
					title="Benefits of Asset Management"
					withShell
					backgroundColor="white"
				/>
			</HeroContainer>
			<Review
				image={MOCK_REVIEW.image}
				reviewHead={MOCK_REVIEW.reviewHead}
				reviewFooter={MOCK_REVIEW.reviewFooter}
			/>
			<AssetManagment
				href="#"
				title={HOME_ASSETS_TITLE}
				description={HOME_ASSETS_DESCRIPTION}
				buttonText={HOME_ASSETS_BUTTON}
				image={HOME_ASSETS_IMAGE}
			/>
		</>
	);
};
