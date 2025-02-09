import type { NextPage } from 'next';

import { MOCK_DEFAULT_BANNER } from '@/shared/model/mock-banner.constants';
import { AssetManagment } from '@/widgets/asset-managment';
import { BannerSection } from '@/widgets/banner-section/ui';
import { Corporate } from '@/widgets/corporate';
import {
	CARDS,
	CORPORATE_DESCRIPTION,
	CORPORATE_TITLE,
} from '@/widgets/corporate/model/corporate';
import { InteractiveVideo } from '@/widgets/interactive-video';
import { Start } from '@/widgets/start';
import {
	START_BUTTON,
	START_DATA,
	START_TITLE,
} from '@/widgets/start/model/start.constants';

import {
	HOME_ASSETS_BUTTON,
	HOME_ASSETS_DESCRIPTION,
	HOME_ASSETS_IMAGE,
	HOME_ASSETS_TITLE,
	HOME_INTERACTIVE_VIDEO,
} from './model/home.constants';

export const Home: NextPage = () => {
	return (
		<>
			<BannerSection
				type="default"
				banner={MOCK_DEFAULT_BANNER}
				alignContent="end"
			/>
			<AssetManagment
				href="#"
				title={HOME_ASSETS_TITLE}
				description={HOME_ASSETS_DESCRIPTION}
				buttonText={HOME_ASSETS_BUTTON}
				image={HOME_ASSETS_IMAGE}
			/>
			<Corporate
				title={CORPORATE_TITLE}
				description={CORPORATE_DESCRIPTION}
				cards={CARDS}
			/>
			<Start
				href="#"
				title={START_TITLE}
				cardsNumber={START_DATA}
				button={START_BUTTON}
			/>
			<InteractiveVideo data={HOME_INTERACTIVE_VIDEO} />
		</>
	);
};
