/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import { Fragment } from 'react';

import type { ShareholdersItemType } from '@/shared/types/global.types';

import css from './index.module.css';

type SignificantShareholdersProps = {
	title?: string;
	shareholders?: Array<ShareholdersItemType>;
};

export const SignificantShareholders = ({
	title,
	shareholders,
}: SignificantShareholdersProps) => {
	if (!shareholders || shareholders.length === 0) {
		return null;
	}

	return (
		<article className={css.root}>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			<ul className={css.list}>
				{shareholders.map((shareholder, index) => (
					<Fragment key={index}>
						<li className={css.listItem}>
							<div className={css.imageWrap}>
								<img src={shareholder.photo.url} className={css.icon} />
							</div>
							<p>{parser(shareholder.name)}</p>
						</li>
						{index !== shareholders.length - 1 && (
							<div className={css.divider} />
						)}
					</Fragment>
				))}
			</ul>
		</article>
	);
};
