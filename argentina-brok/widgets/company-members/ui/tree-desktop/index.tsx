import cx from 'clsx';
import parser from 'html-react-parser';

import type { TreeItem } from '@/shared/types/global.types';

import css from './index.module.css';

export const TreeDesktop = (content: Record<number, Array<TreeItem>>) => {
	console.log(content);
	return (
		<article className={css.root}>
			<div className={css.element}>{parser(content[1][0].value)}</div>
			<div className={css.element}>
				<div className={css.circleTop} />
				{parser(content[2][0].value ?? '')}
				<div className={css.circleBottom} />
			</div>
			<div className={cx(css.group, css.first)}>
				<div className={css.elementSecondType}>
					<div className={css.circleTop} />
					{parser(content[3][0].value ?? '')}
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					{parser(content[3][1].value ?? '')}
				</div>
				<div className={cx(css.elementSecondType, css.withTop, css.withBottom)}>
					<div className={css.circleTop} />
					{parser(content[3][2].value ?? '')}
					<div className={css.circleBottom} />
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					{parser(content[3][3].value ?? '')}
				</div>
				<div className={cx(css.elementSecondType)}>
					<div className={css.circleTop} />
					{parser(content[3][4].value ?? '')}
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					{parser(content[3][5].value ?? '')}
				</div>
				<div className={cx(css.elementSecondType, css.withTop, css.withBottom)}>
					<div className={css.circleTop} />
					{parser(content[3][6].value ?? '')}
					<div className={css.circleBottom} />
				</div>
				<div className={cx(css.elementSecondType, css.withTop)}>
					<div className={css.circleTop} />
					{parser(content[3][7].value ?? '')}
				</div>
				<div className={css.elementSecondType}>
					<div className={css.circleTop} />
					{parser(content[3][8].value ?? '')}
				</div>
			</div>
			<div className={css.underLevel}>
				<div className={cx(css.group, css.second)}>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						{parser(content[4][0].value ?? '')}
					</div>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						{parser(content[4][1].value ?? '')}
					</div>
				</div>
				<div className={cx(css.group, css.second)}>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						{parser(content[5][0].value ?? '')}
					</div>
					<div className={css.elementThirdType}>
						<div className={css.circleTop} />
						{parser(content[5][1].value ?? '')}
					</div>
				</div>
			</div>
		</article>
	);
};
