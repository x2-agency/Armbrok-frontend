import parser from 'html-react-parser';

import css from './index.module.css';

type BannerInfoListProps = {
	title: string;
	description: string;
};

export const BannerInfoList = ({ title, description }: BannerInfoListProps) => (
	<ul className={css.list}>
		<li className={css.title}>{parser(title)}</li>
		<li className={css.description}>{parser(description)}</li>
	</ul>
);
