import Link from 'next/link';

import AppSvg from '@/public/assets/social/app_store.svg';
import GooglePlaySvg from '@/public/assets/social/google_play.svg';
import { SOCIAL_MEDIA_LINKS } from '@/widgets/app-layout/model/social.constants';

import css from './index.module.css';
import { Social } from './social';

export const SocialLinks = () => {
	return (
		<div className={css.root}>
			<div className={css.appStore}>
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
			<Social className={css.media} items={SOCIAL_MEDIA_LINKS} />
		</div>
	);
};
