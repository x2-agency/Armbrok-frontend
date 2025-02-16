import {
	SOCIAL_MEDIA_LINKS,
	STORE_LINKS,
} from '@/widgets/app-layout/models/social.constants';

import css from './index.module.css';
import { Social } from './social';

export const SocialLinks = () => {
	return (
		<div className={css.root}>
			<Social className={css.store} items={STORE_LINKS} />
			<Social className={css.media} items={SOCIAL_MEDIA_LINKS} />
		</div>
	);
};
