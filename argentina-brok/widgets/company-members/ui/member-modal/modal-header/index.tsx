/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import css from './index.module.css';

type ModalHeaderProps = {
	image?: string;
	fullName?: string;
	position?: string;
};

export const ModalHeader = ({
	image,
	fullName,
	position,
}: ModalHeaderProps) => {
	return (
		<header className={css.root}>
			<div className={css.imageWrap}>
				{image && (
					<img src={image} alt="company member image" className={css.image} />
				)}
			</div>
			<div className={css.about}>
				{fullName && <h2 className={css.name}>{parser(fullName)}</h2>}
				{position && <div className={css.position}>{parser(position)}</div>}
			</div>
		</header>
	);
};
