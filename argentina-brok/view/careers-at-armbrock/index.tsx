import type { NextPage } from 'next';

import { VACANCIES_DATA } from '@/shared/model/vacancies.constants';
import type { SliderItem } from '@/shared/types/global.types';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { FeedbackForm } from '@/widgets/feedback-form';
import { SliderSection } from '@/widgets/slider-section';
import { VacanciesSection } from '@/widgets/vacancies-section';

import css from './index.module.css';
import { FEEDBACK_FORM } from './models/careers-at-armbrock.constants';
import type { CareersAtArmbrockPageResponse } from './types/response';

export const CareersAtArmbrock: NextPage<{
	initialData?: CareersAtArmbrockPageResponse;
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
				<TitleSection
					title={initialData?.data.workAdvantagesSection?.title ?? ''}
					description={
						initialData?.data.workAdvantagesSection?.description ?? ''
					}
				/>
				<GuaranteesSection
					items={initialData?.data.workAdvantagesSection?.factoids}
				/>
			</HeroContainer>
			<SliderSection
				title={initialData?.data.officeSlider?.title}
				description={initialData?.data.officeSlider?.description}
				slider={initialData?.data.officeSlider?.slider as SliderItem}
			/>
			<SliderSection
				title={initialData?.data.eventsSlider?.title}
				description={initialData?.data.eventsSlider?.description}
				slider={initialData?.data.eventsSlider?.slider as SliderItem}
			/>
			<SliderSection
				title={initialData?.data.hobbyClubsSlider?.title}
				description={initialData?.data.hobbyClubsSlider?.description}
				slider={initialData?.data.hobbyClubsSlider?.slider as SliderItem}
			/>
			<VacanciesSection
				title={initialData?.data.vacanciesSection?.title ?? ''}
				description={initialData?.data.vacanciesSection?.description ?? ''}
				vacancies={VACANCIES_DATA.vacancies}
			/>
			<FeedbackForm {...FEEDBACK_FORM} />
		</>
	);
};
