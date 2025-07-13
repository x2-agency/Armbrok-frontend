/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { AuthorType } from '@/shared/types/article';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { NameAndPosition } from './name-and-position';
import { Social } from './social';

export type AuthorData = {
	data?: AuthorType;
	publishDate?: string;
	className?: string;
	visivleSocial?: boolean;
};

export const Author = ({
	data,
	publishDate,
	className,
	visivleSocial = false,
}: AuthorData) => {
	const { avatar, socialMedias } = data ?? {};
	return (
		<Container
			className={cx(css.root, className, { [css.extraRoot]: visivleSocial })}
		>
			<div className={css.avatarWrap}>
				<div className={css.avatar}>
					<img loading="lazy" className={css.img} src={avatar?.url ?? ''} />
				</div>
				<NameAndPosition data={data} />
			</div>
			<time className={css.date}>{parser(publishDate ?? '')} </time>
			{visivleSocial && <Social className={css.social} social={socialMedias} />}
		</Container>
	);
};
