export type VacancyProps = {
	name: string;
	link: string;
};

export type VacanciesSectionProps = {
	title: string;
	description: string;
	vacancies: Array<VacancyProps>;
    className?: string;
};
