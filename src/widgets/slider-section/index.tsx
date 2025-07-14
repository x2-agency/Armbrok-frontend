import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';
import type { SliderSectionProps } from './slider-section.types';
import { Slider } from './ui/slider';

export const SliderSection = ({
	title,
	description,
	slider,
	className,
}: SliderSectionProps & { className?: string }) => {
	if (!slider) {
		return null;
	}

	return (
		<section className={cx(css.root, className)}>
			{title && description && (
				<div className={css.titleBlock}>
					{title && <h2 className={css.title}>{parser(title)}</h2>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</div>
			)}
			<Slider slider={slider} />
		</section>
	);
};
