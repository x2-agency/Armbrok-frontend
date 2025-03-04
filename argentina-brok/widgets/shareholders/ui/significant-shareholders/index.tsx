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

	const sortedShareholders = shareholders.sort((a, b) => b.share - a.share);

	return (
		<article className={css.root}>
			{title && <h4 className={css.title}>{parser(title)}</h4>}
			<ul className={css.list}>
				{sortedShareholders.map((shareholder, index) => (
					<Fragment key={index}>
						<li className={css.listItem}>
							<div className={css.leftPart}>
								<div className={css.imageWrap}>
									<img src={shareholder.photo.url} className={css.icon} />
								</div>
								<p className={css.name}>{parser(shareholder.name)}</p>
							</div>
							<div
								className={css.percent}
								style={{
									width:
										index === 0
											? '100%'
											: `${(shareholder.share / sortedShareholders[0].share) * 100}%`,
								}}
							>
								<span className={css.percentLabel}>{shareholder.share}%</span>
							</div>
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
