import type {
	BaseResponse,
	HeroSection,
	ExperienceSection,
	EmployeeStorySection,
	OfficeSliderSection,
	ItemDetail,
	SubscribeEmailForm,
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
};

export type CareersAtArmbrockPageResponse =
	BaseResponse<CareersAtArmbrockPageData>;
