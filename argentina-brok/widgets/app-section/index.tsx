import cx from 'clsx';
import Link from 'next/link';

import { Container } from '@/shared/ui/container';
import type {
	BrokerageAppCardProps,
	PhoneMockupsType,
} from '@/view/home/types/response';

import css from './index.module.css';
import { ContentBlock } from './ui/content-block';
import { Iphone } from './ui/iphone';

type AppSectionProp = {
	content?: BrokerageAppCardProps;
	image?: Array<PhoneMockupsType>;
};

export const AppSection = ({ image = [], content }: AppSectionProp) => {
	const [firstIphone, secondIphone] = image || [];

	return (
		<Container className={css.root}>
			<div className={cx(css.wrap, 'hybrid')}>
				<Iphone image={firstIphone} wrapperClass={css.firstIphone} />
				<Iphone image={secondIphone} wrapperClass={css.secondIphone} />
				<ContentBlock data={content} />
			</div>
			<Link href={content?.link ?? ''} className={css.link} />
		</Container>
	);
};
