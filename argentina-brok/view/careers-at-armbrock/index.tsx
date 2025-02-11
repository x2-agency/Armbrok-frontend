import { CAREERS_AT_ARMBROCK_BANNER } from '@/shared/model/mock-banner.constants';
import { HERO_DATA } from '@/shared/model/mock-banner.constants';
import {
	OFFICE_SLIDER,
	EVENTS_SLIDER_DATA,
	HOBBY_SLIDER_DATA,
} from '@/shared/model/office.constants';
import { MOCK_TITLE_SECTION } from '@/shared/model/title-section.constants';
import { VACANCIES_DATA } from '@/shared/model/vacancies.constants';
import { GuaranteesSection } from '@/shared/ui/guarantees-section';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { FeedbackForm } from '@/widgets/feedback-form';
import { SliderSection } from '@/widgets/slider-section';
import { VacanciesSection } from '@/widgets/vacancies-section';

import css from './index.module.css';
import { FEEDBACK_FORM } from './models/careers-at-armbrock.constants';

export const CareersAtArmbrock = () => {
	return (
		<>
			<BannerSection
				type="default"
				banner={CAREERS_AT_ARMBROCK_BANNER}
				alignContent="center"
			/>
			<HeroContainer className={css.hero}>
				<TitleSection data={MOCK_TITLE_SECTION} />
				<GuaranteesSection items={HERO_DATA.guarantees.items} />
			</HeroContainer>
			<SliderSection
				title={OFFICE_SLIDER.title}
				description={OFFICE_SLIDER.description}
				slider={OFFICE_SLIDER.slider}
			/>
			<SliderSection
				title={EVENTS_SLIDER_DATA.title}
				description={EVENTS_SLIDER_DATA.description}
				slider={EVENTS_SLIDER_DATA.slider}
			/>
			<SliderSection
				title={HOBBY_SLIDER_DATA.title}
				description={HOBBY_SLIDER_DATA.description}
				slider={HOBBY_SLIDER_DATA.slider}
			/>
			<VacanciesSection
				title={VACANCIES_DATA.title}
				description={VACANCIES_DATA.description}
				vacancies={VACANCIES_DATA.vacancies}
			/>
			<FeedbackForm {...FEEDBACK_FORM} />
		</>
	);
};
