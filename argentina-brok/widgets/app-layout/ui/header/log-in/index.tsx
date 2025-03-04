import { Button } from '@/shared/ui/button';
import { OPEN_ACC_BUTTON } from '@/widgets/app-layout/models/header.constants';

import css from './index.module.css';

export const LogIn = () => {
	return (
		<div className={css.root}>
			<Button className={css.button} variant="filled" href="/">
				{OPEN_ACC_BUTTON}
			</Button>
		</div>
	);
};
