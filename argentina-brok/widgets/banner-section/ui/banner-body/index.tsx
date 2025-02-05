import cx from 'clsx';

import { Button } from '@/shared/ui/button';
import type { BannerBodyProps } from '@/widgets/banner-section/banner.types';
import { BannerAward } from '@/widgets/banner-section/ui/banner-award';
import { BannerPanel } from '@/widgets/banner-section/ui/banner-panel';

import css from './index.module.css';

export const BannerBody = ({ type, className, bodyData }: BannerBodyProps) => {
	const defineContent = () => {
		if (type === 'profix') {
			return <BannerPanel className={css.panel} {...bodyData.panel} />;
		}

		if (type === 'about') {
			return (
				<section className={css.awards}>
					{bodyData.awards.map((award, index) => (
						<BannerAward key={index} {...award} />
					))}
				</section>
			);
		}

		if (type === 'default') {
			return (
				<Button
					variant="filled"
					category="big"
					className={css.button}
					href={bodyData.button.href}
				>
					{bodyData.button?.text}
				</Button>
			);
		}
	};

	return <div className={cx(css.root, className)}>{defineContent()}</div>;
};
