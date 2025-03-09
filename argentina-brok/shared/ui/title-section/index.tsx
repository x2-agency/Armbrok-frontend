import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type TitleSectionProps = {
	title: string;
	description?: string;
	className?: string;
};

export const TitleSection = ({
	title,
	description,
	className,
}: TitleSectionProps) => {
	return (
		<Container category="div" className={cx(css.root, className)}>
			<h2 className={css.title} id="internal-rules">
				{parser(title)}
			</h2>
			{description && (
				<div className={css.description}>{parser(description)}</div>
			)}
		</Container>
	);
};
