/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { AppStore } from '@/shared/ui/app-store';
import { Button } from '@/shared/ui/button';
import type { BrokerageAppCardProps } from '@/view/home/types/response';

import css from './index.module.css';

export type ContentProp = {
	data?: BrokerageAppCardProps;
};

export const ContentBlock = ({ data }: ContentProp) => {
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();
	const {
		title,
		description,
		appStoreCaption,
		armbrokLogo,
		button,
		appStoreLogos,
	} = data ?? {};

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

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
						onClick={() => handleClick(button.text ?? 'Open an account')}
					>
						{parser(button.text ?? '')}
					</Button>
				)}
				<div className={css.app}>
					{appStoreCaption && (
						<p className={css.preview}>{parser(appStoreCaption)}</p>
					)}
					{appStoreLogos && (
						<AppStore className={css.store} data={{ appStoreLogos }} />
					)}
				</div>
			</div>
		</div>
	);
};
