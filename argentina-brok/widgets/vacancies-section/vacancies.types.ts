export type VacancyProps = {
	name: string;
	link: string;
	description?: string;
	icon?: string;
	className?: string;
};

export type VacanciesSectionProps = {
	title: string;
	description: string;
	vacancies: Array<VacancyProps>;
	className?: string;
};
