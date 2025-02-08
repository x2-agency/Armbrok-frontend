import type { NextPage } from 'next';

import { MOCK_DEFAULT_BANNER } from '@/shared/model/mock-banner.constants';
import { AssetManagment } from '@/widgets/asset-managment';
import { BannerSection } from '@/widgets/banner-section/ui';

import {
	HOME_ASSETS_BUTTON,
	HOME_ASSETS_DESCRIPTION,
	HOME_ASSETS_IMAGE,
	HOME_ASSETS_TITLE,
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
		</>
	);
};
