import cx from 'clsx';

import type { CardType } from '@/view/brokerage/types/response';
import { Social } from '@/widgets/app-layout/ui/footer/social-links/social';
import { Iphone } from '@/widgets/app-section/ui/iphone';

import css from './index.module.css';

export type TopCardType = {
	data: CardType;
	showLink?: boolean;
};

export const Card = ({ data, showLink }: TopCardType) => {
	return (
		<article className={cx(css.root, 'p-32')}>
			<Iphone wrapperClass={css.imageWrap} image={data.phoneMockup ?? ''} />

			<h2 className={css.title}>{data.title ?? ''}</h2>
			<p className={css.description}>{data.description ?? ''}</p>
			{showLink && (
				<Social className={css.store} appStoreLogos={data?.appStoreLogos} />
			)}
		</article>
	);
};
