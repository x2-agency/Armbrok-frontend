/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { InfoCard } from '@/entities/fund-card/ui/info-card';
import type {
	ItemDetail,
	MediaData,
	InfoCard as InfoCardProps,
} from '@/shared/types/global.types';

import css from './index.module.css';

type DefaultLeftPartProps = ItemDetail & {
	background?: MediaData;
	infoCard: InfoCardProps;
};

export const DefaultLeftPart = ({
	title,
	description,
	background,
	infoCard,
}: DefaultLeftPartProps) => {
	return (
		<div className={css.root}>
			{background?.url && <img className={css.icon} src={background.url} />}
			{title && (
				<div className={css.descriptionBlock}>
					{title && <h3 className={css.title}>{parser(title)}</h3>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</div>
			)}
			<InfoCard {...infoCard} />
		</div>
	);
};
