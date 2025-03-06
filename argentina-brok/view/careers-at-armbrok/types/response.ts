import type {
	BaseResponse,
	EmployeeStorySection,
	ExperienceSection,
	HeroSection,
	ItemDetail,
	OfficeSliderSection,
	SubscribeEmailForm,
	Vacancies,
} from '@/shared/types/global.types';

export type CareersAtArmbrokPageData = {
	publishedAt?: string;
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

export type CareersAtArmbrokPageResponse =
	BaseResponse<CareersAtArmbrokPageData>;
