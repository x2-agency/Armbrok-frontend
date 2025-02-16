import type { NextPage } from 'next';

import { ExpertSolutionSection } from '@/shared/ui/expert-solutions-section';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { BannerSection } from '@/widgets/banner-section/ui';
import { HelpfulInformation } from '@/widgets/helpful-information';
import { Review } from '@/widgets/review';

import css from './index.module.css';
import type { DepositaryServicesPageResponse } from './types/response';

export const DepositaryServices: NextPage<{
	initialData?: DepositaryServicesPageResponse;
}> = ({ initialData }) => {
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
				alignContent="center"
			/>
			<HeroContainer className={css.hero}>
				<ExpertSolutionSection
					items={initialData?.data.primaryServicesSection?.factoids}
					title={initialData?.data.primaryServicesSection?.title}
					withShell
					backgroundColor="white"
				/>
				<ExpertSolutionSection
					items={initialData?.data.supplementaryServices?.factoids}
					title={initialData?.data.supplementaryServices?.title}
					withShell
					backgroundColor="white"
				/>
			</HeroContainer>
			<GuaranteesSection
				className={css.benefits}
				title={initialData?.data.benefitsSection?.title}
				items={initialData?.data.benefitsSection?.factoids}
			/>
			<Review quote={initialData?.data.quoteSection} />
			<HelpfulInformation
				title={initialData?.data.infoSection?.title}
				items={initialData?.data.infoSection?.accordions}
			/>
		</>
	);
};
