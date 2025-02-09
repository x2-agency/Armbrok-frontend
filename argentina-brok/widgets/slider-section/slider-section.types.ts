export type SliderItemProps = {
	image: string;
	title: string;
	description: string;
};

export type SliderSectionProps = {
	title?: string;
	description?: string;
	slider: Array<SliderItemProps>;
};
