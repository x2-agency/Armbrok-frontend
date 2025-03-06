import type {
	AwardSection,
	AwardsResponse,
	BaseResponse,
	CompaniesSection,
	CompanyDetailsSection,
	CompanyStructureSection,
	CorporateEventsSection,
	DocumentsSectionProps,
	HeroSectionAboutUs,
	MembershipSection,
	OfficeSliderSection,
	ProjectsSection,
	ValuesSection,
} from '@/shared/types/global.types';

export type AboutUsPageData = {
	publishedAt?: string;
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
