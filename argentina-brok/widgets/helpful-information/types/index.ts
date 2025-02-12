export type AccordionProps = {
	summary: string;
	description: string;
};

export type HelpfulInformationProps = {
	className?: string;
	title: string;
	items: Array<AccordionProps>;
};
