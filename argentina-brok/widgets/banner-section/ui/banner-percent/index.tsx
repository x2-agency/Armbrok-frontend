import parser from 'html-react-parser';

import css from './index.module.css';

type BannerPercentProps = {
	percent: number;
	text: string;
};

export const BannerPercent = ({ percent, text }: BannerPercentProps) => (
	<p className={css.percentData}>
		<span className={css.percent}>+{percent}%</span>
		<span className={css.percentText}>{parser(text)}</span>
	</p>
);
