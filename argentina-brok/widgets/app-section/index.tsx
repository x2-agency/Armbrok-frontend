import AppIconSvg from '@/public/assets/icon/app.svg';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { STORE_LINKS } from '@/widgets/app-layout/ui/footer/model/social.constants';
import { Link } from '@/widgets/app-layout/ui/footer/ui/social-links/link';

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
		<Container category="section" padding="max" className={css.root}>
			<AppIconSvg />
			<h2 className={css.title}>{title}</h2>
			<p className={css.description}>{description}</p>
			<div className={css.wrap}>
				<Button href="#" variant="filled">
					{buttonText}
				</Button>
				<div className={css.appWrap}>
					<p className={css.downText}>{downText}</p>
					<Link className={css.store} items={STORE_LINKS} />
				</div>
			</div>
		</Container>
	);
};
