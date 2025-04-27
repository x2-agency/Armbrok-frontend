export type CompanyDetailProps = {
	title: string;
	description?: string;
	className?: string;
};

export type CompanyDetailsSectionProps = {
	title?: string;
	details: Array<CompanyDetailProps>;
};
