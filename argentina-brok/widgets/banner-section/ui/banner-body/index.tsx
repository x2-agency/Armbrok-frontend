import { Button } from '@/shared/ui/button';
import type { BannerBodyProps } from '@/widgets/banner-section/banner.types';
import { BannerPanel } from '@/widgets/banner-section/ui/banner-panel';
import { BannerAward } from '../banner-award';

import css from './index.module.css';
import { Container } from '@/shared/ui/container';

export const BannerBody = ({ awards, panel, button }: BannerBodyProps) => {
	const defineContent = () => {
		if (awards) {
			return (
				<section className={css.bannerAwards}>
					{awards.map((award, index) => (
						<BannerAward key={index} {...award} />
					))}
				</section>
			);
		}

		if (panel) {
			return <BannerPanel />;
		}

		if (button) {
			return <Button href={button?.href}>{button?.text}</Button>;
		}
	};

	return <div className={css.root}>{defineContent()}</div>;
};
