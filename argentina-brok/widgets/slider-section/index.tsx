import parser from 'html-react-parser';

import css from './index.module.css';
import type { SliderSectionProps } from './slider-section.types';
import { Slider } from './ui/slider';

export const SliderSection = ({
	title,
	description,
	slider,
}: SliderSectionProps) => {
	if (!slider) {
		return null;
	}

	return (
		<section className={css.root}>
			{title && description && (
				<header className={css.titleBlock}>
					{title && <h2 className={css.title}>{parser(title)}</h2>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</header>
			)}
			<Slider slider={slider} />
		</section>
	);
};
