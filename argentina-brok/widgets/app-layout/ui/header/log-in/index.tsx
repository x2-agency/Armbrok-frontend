import { Button } from '@/shared/ui/button';
import {
	LOGIN_BUTTON,
	OPEN_ACC_BUTTON,
} from '@/widgets/app-layout/models/header.constants';

import css from './index.module.css';
export const LogIn = () => {
	return (
		<div className={css.root}>
			<Button variant="subtle" href="/">
				{LOGIN_BUTTON}
			</Button>
			<Button variant="filled" href="/">
				{OPEN_ACC_BUTTON}
			</Button>
		</div>
	);
};
