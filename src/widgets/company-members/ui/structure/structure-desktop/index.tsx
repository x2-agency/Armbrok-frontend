import parser from 'html-react-parser';

import type { StructureTreeProps } from '@/shared/types/global.types';

import css from './index.module.css';

const HEADER_Y = 250;
const HEADER_H = 96;
const HEADER_W = 220;
const CHILD_H = 58;
const CHILD_W = 180;
const ROW_GAP = 6;
const ROW_HEIGHT = CHILD_H + ROW_GAP;
const FIRST_ROW_Y = HEADER_Y + HEADER_H + ROW_GAP;
const HEADER_X = [30, 260, 490, 720, 950];
const CHILD_X = HEADER_X.map(x => x + (HEADER_W - CHILD_W));
const SPINE_INSET = 15;
const SPINE_X = HEADER_X.map(x => x + SPINE_INSET);
const COLUMN_CENTERS = HEADER_X.map(x => x + HEADER_W / 2);

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
		{
			header: compliance,
			children: [
				humanResources,
				marketingCorporateCommunications,
				digitalProducts,
				itSupport,
				technicalSupport,
			],
		},
	];

	return (
		<div className={css.root}>
			<svg
				className={css.svg}
				viewBox="0 0 1200 740"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="structureBoxGradient"
						x1="0"
						y1="0"
						x2="1"
						y2="0"
					>
						<stop offset="0" stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
				</defs>

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
					d="M600 208L600 228"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M140 228L1060 228"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				{COLUMN_CENTERS.map(cx => (
					<path
						key={`drop-${cx}`}
						d={`M${cx} 228L${cx} ${HEADER_Y}`}
						stroke="#B9B9B9"
						strokeLinecap="round"
					/>
				))}

				<rect
					x="450"
					y="0"
					width="300"
					height="58"
					rx="0"
					fill="url(#structureBoxGradient)"
				/>
				<foreignObject x="450" y="0" width="300" height="58">
					<div className={css.graphCustomContent}>
						{parser(shareholdersMeeting)}
					</div>
				</foreignObject>

				<rect
					x="310"
					y="77"
					width="195"
					height="58"
					rx="0"
					fill="url(#structureBoxGradient)"
				/>
				<foreignObject x="310" y="77" width="195" height="58">
					<div className={css.graphCustomContent}>
						{parser(internalAudit)}
					</div>
				</foreignObject>

				<rect
					x="480"
					y="150"
					width="240"
					height="58"
					rx="0"
					fill="url(#structureBoxGradient)"
				/>
				<foreignObject x="480" y="150" width="240" height="58">
					<div className={css.graphCustomContent}>
						{parser(chiefExecutiveOfficer)}
					</div>
				</foreignObject>

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
								fill="url(#structureBoxGradient)"
							/>
							<foreignObject
								x={headerX}
								y={HEADER_Y}
								width={HEADER_W}
								height={HEADER_H}
							>
								<div className={css.graphCustomContent}>
									{parser(col.header)}
								</div>
							</foreignObject>

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
											fill="url(#structureBoxGradient)"
										/>
										<foreignObject
											x={childX}
											y={childY}
											width={CHILD_W}
											height={CHILD_H}
										>
											<div
												className={css.graphCustomContent}
											>
												{parser(child)}
											</div>
										</foreignObject>
									</g>
								);
							})}
						</g>
					);
				})}
			</svg>
		</div>
	);
};
