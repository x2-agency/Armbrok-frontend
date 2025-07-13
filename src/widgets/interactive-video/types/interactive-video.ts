export type InteractiveVideoType = {
	title: string;
	description: string;
	src: string;
	poster: {
		src: string;
	};
	descriptionVideo: string;
	firstButtonText: string;
	lastButtonText: string;
};

export type InteractiveProps = {
	data: InteractiveVideoType;
};
