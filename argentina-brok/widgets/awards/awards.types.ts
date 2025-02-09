export type AwardItemProps = {
	age: string;
	about: string;
};

export type AwardSectionProps = {
	awards: Array<AwardItemProps>;
	withViewAll?: boolean;
	title: string;
	className?: string;
};
