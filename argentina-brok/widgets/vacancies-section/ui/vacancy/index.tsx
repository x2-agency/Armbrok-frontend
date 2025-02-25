/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { glossaryCard } from '@/shared/types/media-page';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type VacancyProps = {
	data: glossaryCard;
	className?: string;
};

export const Vacancy = ({ data, className }: VacancyProps) => {
	const { title, description, icon, link } = data;
	return (
		<Container
			category="article"
			padding="p-32"
			className={cx(css.root, className)}
		>
			<div className={css.content}>
				{icon && icon.url && (
					<div className={css.iconWrap}>
						<img className={css.icon} src={icon.url} alt="icon" />
					</div>
				)}
				<div className={css.wrap}>
					{title && <h4 className={css.name}>{parser(title)}</h4>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</div>
			</div>
			<Button
				variant="next"
				iconRotate={180}
				href={link.link}
				className={css.button}
			>
				{parser(link.text)}
			</Button>
		</Container>
	);
};
