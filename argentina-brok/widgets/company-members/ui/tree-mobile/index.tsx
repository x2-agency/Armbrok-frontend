'use client';

import cx from 'clsx';
import parser from 'html-react-parser';
import { usePathname } from 'next/navigation';

import type { TreeItem } from '@/shared/types/global.types';

import css from './index.module.css';

export const TreeMobile = (content: Record<number, Array<TreeItem>>) => {
	const locale = usePathname().split('/')[1];

	return (
		<article className={css.root}>
			<div className={css.topElement}>{parser(content[1][0].value ?? '')}</div>
			<div className={css.topElement}>
				<div className={css.circleTop} />
				{parser(content[2][0].value ?? '')}
			</div>
			<div className={css.body}>
				<div className={css.left}>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][0].value ?? '')}
					</div>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][1].value ?? '')}
					</div>
					<div className={cx(css.element, css.leftArrow, css[locale])}>
						<div className={css.circleTop} />
						<div className={css.circleLeft} />
						{parser(content[3][2].value ?? '')}
					</div>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][3].value ?? '')}
					</div>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][4].value ?? '')}
					</div>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][5].value ?? '')}
					</div>
					<div className={cx(css.element, css.leftArrow, css[locale])}>
						<div className={css.circleTop} />
						<div className={css.circleLeft} />
						{parser(content[3][6].value ?? '')}
					</div>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][7].value ?? '')}
					</div>
					<div className={cx(css.element, css[locale])}>
						<div className={css.circleTop} />
						{parser(content[3][8].value ?? '')}
					</div>
				</div>
				<div className={css.right}>
					<div className={css.rightGroup}>
						<div className={cx(css.rightElement, css[locale])}>
							{parser(content[5][1].value ?? '')}
						</div>
						<div className={cx(css.rightElement, css[locale])}>
							{parser(content[5][0].value ?? '')}
						</div>
					</div>
					<div className={css.rightGroup}>
						<div className={cx(css.rightElement, css[locale])}>
							{parser(content[4][1].value ?? '')}
						</div>
						<div className={cx(css.rightElement, css[locale])}>
							{parser(content[4][0].value ?? '')}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
