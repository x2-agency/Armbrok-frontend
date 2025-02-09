export type ReviewHeadProps = {
	review: string;
};

export type ReviewFooterProps = {
	member: {
		fullName: string;
		position: string;
	};
	experience: string;
};

export type ReviewProps = {
	className?: string;
	image: string;
	reviewHead: ReviewHeadProps;
	reviewFooter: ReviewFooterProps;
};
