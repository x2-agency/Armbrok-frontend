import cx from 'clsx';

import type { ImageFormat, PosterCard } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { ContentProp } from './ui/content-block';
import { ContentBlock } from './ui/content-block';
import { Iphone } from './ui/iphone';

type AppSectionProp = {
	content: PosterCard & ContentProp;
	image?: Array<ImageFormat>;
};

export const AppSection = ({ image = [], content }: AppSectionProp) => {
	const [firstIphone, secondIphone] = image || [];

	return (
		<Container className={css.root}>
			<div className={cx(css.wrap, 'hybrid')}>
				<Iphone image={firstIphone} wrapperClass={css.firstIphone} />
				<Iphone image={secondIphone} wrapperClass={css.secondIphone} />
				<ContentBlock
					IconSvg={content?.IconSvg}
					title={content?.title ?? ''}
					description={content?.description ?? ''}
					button={content?.button}
					preview={content?.preview}
				/>
			</div>
		</Container>
	);
};
