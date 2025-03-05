'use client';

import parser from 'html-react-parser';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { TEXT_BLOCK_FOOT } from '@/widgets/app-layout/models/text-block.constants';

import css from './index.module.css';

export const Disclaimer = () => {
	const { footerData } = useLayoutContext();
	const formattedDate = footerData.publishedAt
		? new Date(footerData.publishedAt).toLocaleString('ru-RU', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
			})
		: null;
	return (
		<>
			<div className={css.root}>
				{TEXT_BLOCK_FOOT.map((item, index) => (
					<p key={index} className={css.text}>
						{parser(item.text)}
					</p>
				))}
			</div>
			{footerData.publishedAt && (
				<time className={css.time}>
					Last update: {formattedDate ?? 'DD.MM.YYYY HH:mm'}
				</time>
			)}
		</>
	);
};
