import cx from 'clsx';

import css from './index.module.css';
export type InstrumentType = {
	id?: number;
	title: string;
	description: string;
	className?: string;
};

export const Instrument = ({
	title,
	description,
	className,
}: InstrumentType) => {
	return (
		<article className={cx(css.root, 'p-40', className)}>
			<h3 className={css.title}>{title}</h3>
			<p className={css.description}>{description}</p>
		</article>
	);
};
