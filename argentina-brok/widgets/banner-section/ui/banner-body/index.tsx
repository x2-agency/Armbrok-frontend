import { Button } from '@/shared/ui/button';
import type { BannerBodyProps } from '@/widgets/banner-section/banner.types';
import { BannerAward } from '@/widgets/banner-section/ui/banner-award';
import { BannerPanel } from '@/widgets/banner-section/ui/banner-panel';

import css from './index.module.css';

export const BannerBody = ({ awards, panel, button }: BannerBodyProps) => {
	const defineContent = () => {
		if (panel) {
			return <BannerPanel className={css.panel} {...panel} />;
		}

		if (awards) {
			return (
				<section className={css.bannerAwards}>
					{awards.map((award, index) => (
						<BannerAward key={index} {...award} />
					))}
				</section>
			);
		}

		if (button) {
			return (
				<Button variant="filled" className={css.button} href={button?.href}>
					{button?.text}
				</Button>
			);
		}
	};

	return <div className={css.root}>{defineContent()}</div>;
};
