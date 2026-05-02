import { useLocale } from 'next-intl';

import type { StructureTreeProps } from '@/shared/types/global.types';
import { SvgTextNode } from '@/widgets/company-members/ui/structure/svg-text-node';

import css from './index.module.css';

const HEADER_Y = 250;
const HEADER_H = 58;
const HEADER_W = 220;
const CHILD_H = 56;
const CHILD_W = 164;
const ROW_GAP = 12;
const ROW_HEIGHT = CHILD_H + ROW_GAP;
const FIRST_ROW_Y = HEADER_Y + HEADER_H + ROW_GAP;
const HEADER_X = [30, 260, 490, 720];
const CHILD_X = HEADER_X.map(x => x + (HEADER_W - CHILD_W));
const SPINE_INSET = 15;
const SPINE_X = HEADER_X.map(x => x + SPINE_INSET);
const COLUMN_CENTERS = HEADER_X.map(x => x + HEADER_W / 2);
const RAIL_Y = 228;

const COMPLIANCE_ITEM_X = 970;
const COMPLIANCE_GAP = 12;
const COMPLIANCE_SPINE_X = COMPLIANCE_ITEM_X - 20;

export const StructureDesktop = ({
	shareholdersMeeting = '',
	internalAudit = '',
	chiefExecutiveOfficer = '',
	globalMarketsInvestment = '',
	globalBrokerage = '',
	globalPortfolioManagement = '',
	globalProprietaryTrading = '',
	globalResearchConsulting = '',
	globalSales = '',
	localMarketsInvestment = '',
	localBrokerage = '',
	localPortfolioManagement = '',
	localInvestmentBanking = '',
	localProprietaryTrading = '',
	localResearchConsulting = '',
	localSales = '',
	operations = '',
	depositaryCustodySettlements = '',
	backOffice = '',
	crm = '',
	onboarding = '',
	finance = '',
	treasury = '',
	accounting = '',
	reportingBudgeting = '',
	compliance = '',
	humanResources = '',
	marketingCorporateCommunications = '',
	digitalProducts = '',
	itSupport = '',
	technicalSupport = '',
}: StructureTreeProps) => {
	const locale = useLocale();
	const isHy = locale === 'hy';
	const fontSize = isHy ? 11 : 14;
	const charWidthMultiplier = isHy ? 0.70 : 0.55;

	const columns = [
		{
			header: globalMarketsInvestment,
			children: [
				globalBrokerage,
				globalPortfolioManagement,
				globalProprietaryTrading,
				globalResearchConsulting,
				globalSales,
			],
		},
		{
			header: localMarketsInvestment,
			children: [
				localBrokerage,
				localPortfolioManagement,
				localInvestmentBanking,
				localProprietaryTrading,
				localResearchConsulting,
				localSales,
			],
		},
		{
			header: operations,
			children: [
				depositaryCustodySettlements,
				backOffice,
				crm,
				onboarding,
			],
		},
		{
			header: finance,
			children: [treasury, accounting, reportingBudgeting],
		},
	];

	const complianceChildren = [
		humanResources,
		marketingCorporateCommunications,
		digitalProducts,
		itSupport,
		technicalSupport,
	];

	const complianceHeaderMidY = HEADER_Y + HEADER_H / 2;
	const complianceFirstChildY = HEADER_Y + HEADER_H + COMPLIANCE_GAP;
	const complianceChildPositions = complianceChildren.map((label, idx) => {
		const y = complianceFirstChildY + idx * (CHILD_H + COMPLIANCE_GAP);
		return { label, y, midY: y + CHILD_H / 2 };
	});
	const complianceLastMidY =
		complianceChildPositions.length > 0
			? complianceChildPositions[complianceChildPositions.length - 1]
					.midY
			: complianceHeaderMidY;

	return (
		<div className={css.root}>
			<svg
				className={css.svg}
				viewBox="0 0 1200 790"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M600 58L600 150"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M505 106L600 106"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d={`M600 208L600 ${RAIL_Y}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d={`M${COLUMN_CENTERS[0]} ${RAIL_Y}L${COLUMN_CENTERS[COLUMN_CENTERS.length - 1]} ${RAIL_Y}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				{COLUMN_CENTERS.map(cx => (
					<path
						key={`drop-${cx}`}
						d={`M${cx} ${RAIL_Y}L${cx} ${HEADER_Y}`}
						stroke="#B9B9B9"
						strokeLinecap="round"
					/>
				))}

				<path
					d={`M600 ${RAIL_Y}L${COMPLIANCE_SPINE_X} ${RAIL_Y}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d={`M${COMPLIANCE_SPINE_X} ${RAIL_Y}L${COMPLIANCE_SPINE_X} ${complianceLastMidY}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d={`M${COMPLIANCE_SPINE_X} ${complianceHeaderMidY}L${COMPLIANCE_ITEM_X} ${complianceHeaderMidY}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				{complianceChildPositions.map(item => (
					<path
						key={`compliance-stub-${item.y}`}
						d={`M${COMPLIANCE_SPINE_X} ${item.midY}L${COMPLIANCE_ITEM_X} ${item.midY}`}
						stroke="#B9B9B9"
						strokeLinecap="round"
					/>
				))}

				<rect x="450" y="0" width="300" height="58" rx="0" fill="#000000" />
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier} html={shareholdersMeeting} x={450} y={0} width={300} height={58} />

				<rect x="310" y="77" width="195" height="58" rx="0" fill="#000000" />
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier} html={internalAudit} x={310} y={77} width={195} height={58} />

				<rect x="480" y="150" width="240" height="58" rx="0" fill="#000000" />
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier} html={chiefExecutiveOfficer} x={480} y={150} width={240} height={58} />

				{columns.map((col, i) => {
					const headerX = HEADER_X[i];
					const childX = CHILD_X[i];
					const spineX = SPINE_X[i];
					const headerBottom = HEADER_Y + HEADER_H;
					const lastChildMidY =
						FIRST_ROW_Y +
						(col.children.length - 1) * ROW_HEIGHT +
						CHILD_H / 2;
					return (
						<g key={`col-${i}`}>
							<path
								d={`M${spineX} ${headerBottom}L${spineX} ${lastChildMidY}`}
								stroke="#B9B9B9"
								strokeLinecap="round"
							/>

							<rect
								x={headerX}
								y={HEADER_Y}
								width={HEADER_W}
								height={HEADER_H}
								rx="0"
								fill="#000000"
							/>
							<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
								html={col.header}
								x={headerX}
								y={HEADER_Y}
								width={HEADER_W}
								height={HEADER_H}
							/>

							{col.children.map((child, j) => {
								const childY = FIRST_ROW_Y + j * ROW_HEIGHT;
								const childMidY = childY + CHILD_H / 2;
								return (
									<g key={`child-${i}-${j}`}>
										<path
											d={`M${spineX} ${childMidY}L${childX} ${childMidY}`}
											stroke="#B9B9B9"
											strokeLinecap="round"
										/>
										<rect
											x={childX}
											y={childY}
											width={CHILD_W}
											height={CHILD_H}
											rx="0"
											fill="#000000"
										/>
										<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
											html={child}
											x={childX}
											y={childY}
											width={CHILD_W}
											height={CHILD_H}
										/>
									</g>
								);
							})}
						</g>
					);
				})}

				<rect
					x={COMPLIANCE_ITEM_X}
					y={HEADER_Y}
					width={HEADER_W}
					height={HEADER_H}
					rx="0"
					fill="#000000"
				/>
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
					html={compliance}
					x={COMPLIANCE_ITEM_X}
					y={HEADER_Y}
					width={HEADER_W}
					height={HEADER_H}
				/>

				{complianceChildPositions.map(item => (
					<g key={`compliance-${item.y}`}>
						<rect
							x={COMPLIANCE_ITEM_X}
							y={item.y}
							width={CHILD_W}
							height={CHILD_H}
							rx="0"
							fill="#000000"
						/>
						<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
							html={item.label}
							x={COMPLIANCE_ITEM_X}
							y={item.y}
							width={CHILD_W}
							height={CHILD_H}
						/>
					</g>
				))}
			</svg>
		</div>
	);
};
