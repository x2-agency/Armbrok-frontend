import {
	SOCIAL_MEDIA_LINKS,
	STORE_LINKS,
} from '@/widgets/app-layout/models/social.constants';

import css from './index.module.css';
import { Link } from './link';

export const Social = () => {
	return (
		<div className={css.root}>
			<Link className={css.store} items={STORE_LINKS} />
			<Link className={css.media} items={SOCIAL_MEDIA_LINKS} />
		</div>
	);
};
