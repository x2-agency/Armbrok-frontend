/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import AppIconSvg from '@/public/assets/icon/app.svg';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { STORE_LINKS } from '@/widgets/app-layout/ui/footer/model/social.constants';
import { Link } from '@/widgets/app-layout/ui/footer/ui/social-links/link';

import '@/public/assets/images/iPhone_15_Pro.png';
import css from './index.module.css';
export const AppSection = ({
	title,
	description,
	buttonText,
	downText,
}: {
	title: string;
	description: string;
	buttonText: string;
	downText: string;
}) => {
	return (
		<Container category="section" padding="hybrid" className={css.root}>
			<div className={css.leftBlock}>
				<AppIconSvg className={css.svg} />
				<h2 className={css.title}>{title}</h2>
				<p className={css.description}>{parser(description)}</p>
				<div className={css.wrap}>
					<Button href="#" variant="filled" category="big">
						{buttonText}
					</Button>
					<div className={css.appWrap}>
						<p className={css.downText}>{parser(downText)}</p>
						<Link className={css.store} items={STORE_LINKS} />
					</div>
				</div>
			</div>
			<div className={css.rightBlock}>
				<img className={css.imageOne} src="/assets/images/iPhone_15_Pro.png" />
				<img className={css.imageTwo} src="/assets/images/iPhone_15_Pro2.png" />
			</div>
		</Container>
	);
};
