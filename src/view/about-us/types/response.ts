import type {
	AwardSection,
	AwardsResponse,
	BaseResponse,
	CompanyDetailsSection,
	CompanyStructureSection,
	CorporateEventsSection,
	DocumentsSectionProps,
	ExperienceSection,
	HeroSectionAboutUs,
	MembershipSection,
	OfficeSliderSection,
	ParentFundProps,
	ProjectsSection,
	ValuesSection,
} from '@/shared/types/global.types';
import type { CompaniesSectionProps } from '@/view/home/types/response';

export type AboutUsPageData = {
	publishedAt?: string;
	heroSection?: HeroSectionAboutUs;
	experienceSection?: ExperienceSection;
	valuesSection?: ValuesSection;
	companiesSection?: CompaniesSectionProps;
	corporateEventsSection?: CorporateEventsSection;
	documentsSection?: DocumentsSectionProps;
	companyDetails?: CompanyDetailsSection;
	membershipSection?: MembershipSection;
	projectsSection?: ProjectsSection;
	companyStructureSection?: CompanyStructureSection;
	significantProjectsSection?: OfficeSliderSection;
	awardsSection?: AwardSection;
	awards?: AwardsResponse;
	parentFunds?: Array<ParentFundProps>;
};

export type AboutUsPageResponse = BaseResponse<AboutUsPageData>;
