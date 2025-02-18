import type {
	BaseResponse,
	HeroSection,
	ExperienceSection,
	EmployeeStorySection,
	OfficeSliderSection,
	ItemDetail,
	SubscribeEmailForm,
	Vacancies,
} from '@/shared/types/global.types';

export type CareersAtArmbrockPageData = {
	heroSection?: HeroSection;
	workAdvantagesSection?: ExperienceSection;
	employeeStorySection?: EmployeeStorySection;
	officeSlider?: OfficeSliderSection;
	eventsSlider?: OfficeSliderSection;
	hobbyClubsSlider?: OfficeSliderSection;
	vacanciesSection?: ItemDetail;
	subscribeEmailForm?: SubscribeEmailForm;
	vacancies?: Vacancies;
};

export type CareersAtArmbrockPageResponse =
	BaseResponse<CareersAtArmbrockPageData>;
