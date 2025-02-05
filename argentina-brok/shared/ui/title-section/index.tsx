import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

type TitleSectionProps = {
	title: string;
	description: string;
	className?: string;
};

export const TitleSection = ({
	title,
	description,
	className,
}: TitleSectionProps) => {
	return (
		<section className={cx(css.root, className)}>
			<h2 className={css.title}>{parser(title)}</h2>
			<p className={css.description}>{parser(description)}</p>
		</section>
	);
};
