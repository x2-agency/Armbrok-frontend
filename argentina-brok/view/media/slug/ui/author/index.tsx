/* eslint-disable @next/next/no-img-element */
import cx from 'clsx';
import parser from 'html-react-parser';

import type { AuthorType } from '@/shared/types/article';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
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
	const { avatar, fullName, name, position, socialMedias } = data ?? {};
	return (
		<Container
			className={cx(css.root, className, { [css.extraRoot]: visivleSocial })}
		>
			<div className={css.avatarWrap}>
				<div className={css.avatar}>
					<img
						className={css.img}
						src={avatar?.url ?? ''}
						alt={avatar?.alternativeText ?? ''}
					/>
				</div>
				<div className={css.textContent}>
					<p className={css.name}>{parser(fullName ?? '')}</p>

					<p className={css.name}>{parser(name ?? '')}</p>
					<p className={css.position}>{parser(position ?? '')}</p>
				</div>
			</div>
			<time className={css.date}>{parser(publishDate ?? '')} </time>
			{visivleSocial && <Social social={socialMedias} />}
		</Container>
	);
};
