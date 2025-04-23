import cx from 'clsx';

import type { ItemDetail, ParentFundProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { ParentFundsBody } from './ui/parent-funds-body';
import { ParentFundsHeader } from './ui/parent-funds-header';

export type ParentFundsMode = 'default' | 'slider';

type ParentFundsProps = {
	funds?: Array<ParentFundProps>;
	mode?: ParentFundsMode;
	head: ItemDetail;
};

export const ParentFunds = ({
	funds,
	mode = 'default',
	head,
}: ParentFundsProps) => {
	if (!funds || !funds.length) {
		return null;
	}

	return (
		<Container className={cx(css.root, css[mode])}>
			<ParentFundsHeader mode={mode} data={head} />
			<ParentFundsBody funds={funds} mode={mode} />
		</Container>
	);
};
