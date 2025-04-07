import cx from 'clsx';
import parser from 'html-react-parser';

import type { PortfolioStructureProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { AssetTypes } from './ui/asset-types';
import { ItemDetailSection } from './ui/item-detail';
import { Maturity } from './ui/maturity';

export const PortfolioStructure = ({
	title,
	assetTypesSection,
	industriesSection,
	issuersSection,
	maturitySection,
	className,
}: PortfolioStructureProps & { className?: string }) => {
	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<div className={css.content}>
				<div className={css.leftPart}>
					{assetTypesSection && <AssetTypes {...assetTypesSection} />}
					{industriesSection && <ItemDetailSection {...industriesSection} />}
					{issuersSection && <ItemDetailSection {...issuersSection} />}
				</div>
				<div className={css.rightPart}>
					{maturitySection && <Maturity {...maturitySection} />}
				</div>
			</div>
		</Container>
	);
};
