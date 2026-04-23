import cx from 'clsx';

import { SOCIAL_MEDIA_LINKS } from '@/widgets/app-layout/model/social.constants';

import css from './index.module.css';
import { Social } from './social';

export const SocialLinks = ({ className }: { className?: string }) => {
	return (
		<div className={cx(css.root, className)}>
			<Social className={css.media} items={SOCIAL_MEDIA_LINKS} />
		</div>
	);
};
