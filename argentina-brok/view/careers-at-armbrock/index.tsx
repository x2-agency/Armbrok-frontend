import type { NextPage } from 'next';

import { FeedbackForm } from '@/features/feedback-form';
import type { SliderItem } from '@/shared/types/global.types';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { OurPeopleSection } from '@/widgets/our-people-section';
import { SliderSection } from '@/widgets/slider-section';
import { VacanciesSection } from '@/widgets/vacancies-section';

import css from './index.module.css';
import { FEEDBACK_FORM } from './models/careers-at-armbrock.constants';
import type { CareersAtArmbrockPageResponse } from './types/response';

export const CareersAtArmbrock: NextPage<
	CareersAtArmbrockPageResponse['data']
> = ({
	heroSection,
	hobbyClubsSlider,
	workAdvantagesSection,
	officeSlider,
	employeeStorySection,
	eventsSlider,
	vacanciesSection,
	vacancies,
}) => {
	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: heroSection?.button,
					poster: heroSection?.background,
				}}
				alignContent="center"
			/>
			<HeroContainer className={css.hero}>
				<TitleSection
					title={workAdvantagesSection?.title ?? ''}
					description={workAdvantagesSection?.description ?? ''}
				/>
				<GuaranteesSection items={workAdvantagesSection?.factoids} />
			</HeroContainer>
			<OurPeopleSection
				title={employeeStorySection?.title}
				description={employeeStorySection?.description}
				employeeStories={employeeStorySection?.employeeStories}
			/>
			<SliderSection
				title={officeSlider?.title}
				description={officeSlider?.description}
				slider={officeSlider?.slider as SliderItem}
			/>
			<SliderSection
				title={eventsSlider?.title}
				description={eventsSlider?.description}
				slider={eventsSlider?.slider as SliderItem}
			/>
			<SliderSection
				title={hobbyClubsSlider?.title}
				description={hobbyClubsSlider?.description}
				slider={hobbyClubsSlider?.slider as SliderItem}
			/>
			<VacanciesSection
				title={vacanciesSection?.title ?? ''}
				description={vacanciesSection?.description ?? ''}
				vacancies={vacancies?.data}
			/>
			<FeedbackForm {...FEEDBACK_FORM} />
		</>
	);
};
