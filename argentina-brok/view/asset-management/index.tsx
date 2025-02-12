import type { NextPage } from 'next';

import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { AssetManagment } from '@/widgets/asset-managment';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';

import css from './index.module.css';
import type { AssetManagementPageResponse } from './types/response';

export const AssetManagement: NextPage<{
	initialData?: AssetManagementPageResponse;
}> = ({ initialData }) => {
	if (!initialData?.data) {
		throw new Error();
	}

	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: initialData?.data.heroSection?.title ?? '',
					description: initialData?.data.heroSection?.description ?? '',
					button: initialData?.data.heroSection?.button,
					poster: initialData?.data.heroSection?.background,
				}}
				alignContent="start"
			/>
			{initialData.data.experienceSection && (
				<HeroContainer>
					<TitleSection
						title={initialData.data.experienceSection.title}
						description={initialData.data.experienceSection.description}
					/>
				</HeroContainer>
			)}
			<ExpertSolutionSection
				items={initialData.data.benefitsSection?.factoids}
				title={initialData.data.benefitsSection?.title}
				withShell
				backgroundColor="white"
				className={css.experts}
			/>
			<Review quote={initialData?.data.quoteSection} />
			{/* <AssetManagment
				href="#"
				title={HOME_ASSETS_TITLE}
				description={HOME_ASSETS_DESCRIPTION}
				buttonText={HOME_ASSETS_BUTTON}
				image={HOME_ASSETS_IMAGE}
			/> */}
			<HelpfulInformation
				title={initialData.data.infoSection?.title}
				items={initialData.data.infoSection?.accordions}
			/>
		</>
	);
};
