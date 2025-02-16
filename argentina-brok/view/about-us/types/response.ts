import type {
	BaseResponse,
	HeroSectionAboutUs,
	CompaniesSection,
	ValuesSection,
	CorporateEventsSection,
	CompanyDetailsSection,
	MembershipSection,
	CompanyStructureSection,
	DocumentsSection,
	ProjectsSection,
	OfficeSliderSection,
} from '@/shared/types/global.types';

export type AboutUsPageData = {
	heroSection?: HeroSectionAboutUs;
	valuesSection?: ValuesSection;
	companiesSection?: CompaniesSection;
	corporateEventsSection?: CorporateEventsSection;
	documentsSection?: DocumentsSection;
	companyDetails?: CompanyDetailsSection;
	membershipSection?: MembershipSection;
	projectsSection?: ProjectsSection;
	companyStructureSection?: CompanyStructureSection;
	significantProjectsSection?: OfficeSliderSection;
};

export type AboutUsPageResponse = BaseResponse<AboutUsPageData>;
