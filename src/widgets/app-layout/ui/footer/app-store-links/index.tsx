import cx from 'clsx';
import Link from 'next/link';

import AppSvg from '@/public/assets/app.svg';
import GooglePlaySvg from '@/public/assets/google-play.svg';

import css from './index.module.css';

export const AppStoreLinks = ({ className }: { className?: string }) => {
	return (
		<div className={cx(css.root, className)}>
			<Link
				href="https://apps.apple.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AppSvg className={css.svg} />
			</Link>
			<Link
				href="https://play.google.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GooglePlaySvg className={css.svg} />
			</Link>
		</div>
	);
};
