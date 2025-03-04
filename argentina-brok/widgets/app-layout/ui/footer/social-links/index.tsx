import AppSvg from '@/public/assets/social/app_store.svg';
import GooglePlaySvg from '@/public/assets/social/google_play.svg';
import { SOCIAL_MEDIA_LINKS } from '@/widgets/app-layout/model/social.constants';

import css from './index.module.css';
import { Social } from './social';

export const SocialLinks = () => {
	return (
		<div className={css.root}>
			<div className={css.appStore}>
				<AppSvg className={css.svg} />
				<GooglePlaySvg className={css.svg} />
			</div>
			<Social className={css.media} items={SOCIAL_MEDIA_LINKS} />
		</div>
	);
};
