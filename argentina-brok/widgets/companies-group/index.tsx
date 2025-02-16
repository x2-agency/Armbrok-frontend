/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { MediaData } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

type CompaniesGroupProps = {
	title?: string;
	items?: Array<MediaData>;
	className?: string;
};

export const CompaniesGroup = ({
	title,
	items,
	className,
}: CompaniesGroupProps) => {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.companies}>
				{items.map((value, index) => (
					<li key={index} className={css.company}>
						<img
							src={value.url}
							alt="company"
							className={css.companyIcon}
							draggable={false}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
