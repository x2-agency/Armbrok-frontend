export type CompanyDetailProps = {
	title: string;
	description?: string;
};

export type CompanyDetailsSectionProps = {
	title?: string;
	details: Array<CompanyDetailProps>;
};
