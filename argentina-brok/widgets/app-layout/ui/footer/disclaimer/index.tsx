import parser from 'html-react-parser';

import {
	LAST_UPDATE,
	TEXT_BLOCK_FOOT,
} from '@/widgets/app-layout/models/text-block.constants';

import css from './index.module.css';

export const Disclaimer = () => {
	return (
		<>
			<div className={css.root}>
				{TEXT_BLOCK_FOOT.map((item, index) => (
					<p key={index} className={css.text}>
						{parser(item.text)}
					</p>
				))}
			</div>
			<time className={css.time}>{LAST_UPDATE}</time>
		</>
	);
};
