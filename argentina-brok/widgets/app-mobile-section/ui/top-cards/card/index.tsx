import type { ImageFormat } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { STORE_LINKS } from '@/widgets/app-layout/models/social.constants';
import { Link } from '@/widgets/app-layout/ui/footer/social-links/link';
import { Iphone } from '@/widgets/app-section/ui/iphone';

import css from './index.module.css';

export type TopCardType = {
	title: string;
	description: string;
	mediaContent: ImageFormat;
	showLink?: boolean;
};

export const Card = ({
	title,
	description,
	mediaContent,
	showLink,
}: TopCardType) => {
	return (
		<Container className={css.root} category="article" padding="min">
			<h2 className={css.title}>{title}</h2>
			<p className={css.description}>{description}</p>
			{showLink && <Link className={css.store} items={STORE_LINKS} />}

			<Iphone wrapperClass={css.imageWrap} image={mediaContent} />
		</Container>
	);
};
