import type {
	BaseResponse,
	HeroSectionAboutUs,
	CompaniesSection,
	ValuesSection,
	CorporateEventsSection,
	CompanyDetailsSection,
	MembershipSection,
	CompanyStructureSection,
	DocumentsSectionProps,
	ProjectsSection,
	OfficeSliderSection,
	AwardSection,
	AwardsResponse,
} from '@/shared/types/global.types';

export type AboutUsPageData = {
	heroSection?: HeroSectionAboutUs;
	valuesSection?: ValuesSection;
	companiesSection?: CompaniesSection;
	corporateEventsSection?: CorporateEventsSection;
	documentsSection?: DocumentsSectionProps;
	companyDetails?: CompanyDetailsSection;
	membershipSection?: MembershipSection;
	projectsSection?: ProjectsSection;
	companyStructureSection?: CompanyStructureSection;
	significantProjectsSection?: OfficeSliderSection;
	awardsSection?: AwardSection;
	awards?: AwardsResponse;
};

export type AboutUsPageResponse = BaseResponse<AboutUsPageData>;
