/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import type { GlossaryCardType } from '@/shared/types/media-page';
import { Button } from '@/shared/ui/button';

import css from './index.module.css';

export type VacancyProps = {
	data?: GlossaryCardType;
	className?: string;
};

export const Vacancy = ({ data, className }: VacancyProps) => {
	const { title, description, icon, link } = data ?? {};
	return (
		<article className={cx(css.root, className, 'p-32')}>
			<div className={css.content}>
				{icon && icon?.url && (
					<div className={css.iconWrap}>
						<img className={css.icon} src={icon?.url ?? ''} loading="lazy" />
					</div>
				)}
				<div className={css.wrap}>
					{title && <h4 className={css.name}>{parser(title ?? '')}</h4>}
					{description && (
						<p className={css.description}>{parser(description ?? '')}</p>
					)}
				</div>
			</div>
			<Button variant="next" iconRotate={180} className={css.button}>
				{parser(link?.text ?? '')}
			</Button>
			<Link href={link?.link ?? '#'} className={css.link} target="_blank" />
		</article>
	);
};
