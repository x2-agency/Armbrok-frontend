import cx from 'clsx';

import { SOCIAL_MEDIA_LINKS } from '@/widgets/app-layout/model/social.constants';

import css from './index.module.css';
import { Social } from './social';

export const SocialLinks = ({ className }: { className?: string }) => {
	return (
		<div className={cx(css.root, className)}>
			{/* <div className={css.appStore}> */}
			{/* <Link
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
				</Link> */}
			{/* </div> */}
			<Social className={css.media} items={SOCIAL_MEDIA_LINKS} />
		</div>
	);
};
