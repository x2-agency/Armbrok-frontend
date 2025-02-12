export type AccordionProps = {
	title: string;
	description: string;
	articles: Array<string>;
	underDescription: string;
};

export type HelpfulInformationProps = {
	className?: string;
	title: string;
	items: Array<AccordionProps>;
};
