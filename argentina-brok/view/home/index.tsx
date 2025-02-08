import type { NextPage } from 'next';

import { AssetManagment } from '@/widgets/asset-managment';

import {
	HOME_ASSETS_BUTTON,
	HOME_ASSETS_DESCRIPTION,
	HOME_ASSETS_IMAGE,
	HOME_ASSETS_TITLE,
} from './model/home.constants';

export const Home: NextPage = () => {
	return (
		<AssetManagment
			href="#"
			title={HOME_ASSETS_TITLE}
			description={HOME_ASSETS_DESCRIPTION}
			buttonText={HOME_ASSETS_BUTTON}
			image={HOME_ASSETS_IMAGE}
		/>
	);
};
