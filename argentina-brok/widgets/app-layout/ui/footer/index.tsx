import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export const Footer = () => {
	return (
		<footer className={css.root}>
			<Container>
				<div className={css.table}></div>
				<div className={css.imgWrap}></div>
				<div className={css.textWrap}>
					<p className={css.text}>
						Armbrok is not responsible for the accuracy and reliability of the
					</p>
				</div>
			</Container>
		</footer>
	);
};
