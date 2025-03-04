import cx from 'clsx';

import { Link } from '@/i18n/navigation';
import type { IconListProps } from '@/widgets/app-layout/model/social.constants';

import css from './index.module.css';

export const Social = ({ items, className }: IconListProps) => {
	return (
		<div className={cx(css.root, className)}>
			{items?.map((link, index) => (
				<Link key={index} target="_blank" href={link.href || '#'}>
					{link.SvgIcon && <link.SvgIcon className={css.svg} />}
				</Link>
			))}
		</div>
	);
};
