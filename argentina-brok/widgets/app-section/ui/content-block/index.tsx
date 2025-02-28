/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import type { BrokerageAppCardProps } from '@/view/home/types/response';
import { Social } from '@/widgets/app-layout/ui/footer/social-links/social';

import css from './index.module.css';

export type ContentProp = {
	data: BrokerageAppCardProps;
};

export const ContentBlock = ({ data }: ContentProp) => {
	const {
		title,
		description,
		appStoreCaption,
		armbrokLogo,
		button,
		appStoreLogos,
	} = data;

	return (
		<div className={css.root}>
			{armbrokLogo && (
				<img
					src={armbrokLogo.url}
					alt={armbrokLogo.alternativeText ?? ''}
					className={css.icon}
				/>
			)}
			{title && <h2 className={css.title}>{parser(title ?? '')}</h2>}
			{description && <p className={css.description}>{parser(description)}</p>}
			<div className={css.bottomWrap}>
				{button && (
					<Button
						className={css.button}
						category="big"
						variant="filled"
						href={button.link}
					>
						{parser(button.text)}
					</Button>
				)}
				<div className={css.app}>
					{appStoreCaption && (
						<p className={css.preview}>{parser(appStoreCaption)}</p>
					)}
					{appStoreLogos && (
						<Social className={css.store} appStoreLogos={appStoreLogos} />
					)}
				</div>
			</div>
		</div>
	);
};
