/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import type { PosterCard } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import {
	HOME_ASSETS_BUTTON,
	HOME_ASSETS_IMAGE,
} from '@/view/home/model/home.constants';

import css from './index.module.css';

export const AssetManagment = ({ title, description }: PosterCard) => {
	return (
		<Container category="section" padding="hybrid" className={css.root}>
			<div className={css.contnet}>
				<h2 className={css.title}>{parser(title)}</h2>
				<p className={css.description}>{parser(description ?? '')}</p>
				<Button className={css.button} category="big" href="#" variant="filled">
					{parser(HOME_ASSETS_BUTTON)}
				</Button>
			</div>
			<div className={css.imgWrap}>
				<img className={css.image} src={HOME_ASSETS_IMAGE} alt="hand" />
			</div>
		</Container>
	);
};
