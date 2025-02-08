import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const Corporate = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<Container className={css.root}>
			<div className={css.wrap}>
				<h2 className={css.title}>{title}</h2>
				<p className={css.description}>{description}</p>
			</div>
		</Container>
	);
};
