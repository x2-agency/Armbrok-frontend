import { useLocale } from 'next-intl';

import type { StructureTreeProps } from '@/shared/types/global.types';
import { SvgTextNode } from '@/widgets/company-members/ui/structure/svg-text-node';

import css from './index.module.css';

const TOP_CARD_X = 26;
const TOP_CARD_W = 304;
const TOP_CARD_H = 58;
const TOP_END_Y = 195;
const CENTRAL_SPINE_X = 178;

const COL_A_X = 0;
const COL_B_X = 188;
const COL_W = 168;
const HEADER_H = 58;
const CHILD_H = 56;
const CHILD_INDENT = 20;
const CHILD_W = COL_W - CHILD_INDENT;
const SPINE_INSET = 8;
const GAP = 4;
const SECTION_GAP = 40;
const RAIL_OFFSET = 20;

const COL_A_CHILD_X = COL_A_X + CHILD_INDENT;
const COL_B_CHILD_X = COL_B_X + CHILD_INDENT;
const COL_A_SPINE_X = COL_A_X + SPINE_INSET;
const COL_B_SPINE_X = COL_B_X + SPINE_INSET;
const COL_A_CENTER = COL_A_X + COL_W / 2;
const COL_B_CENTER = COL_B_X + COL_W / 2;

const SOLO_X = CENTRAL_SPINE_X - COL_W / 2;
const SOLO_CHILD_X = SOLO_X + CHILD_INDENT;
const SOLO_SPINE_X = SOLO_X + SPINE_INSET;


type LaidOutChild = { label: string; y: number; midY: number };
type LaidOutCol = {
	header: string;
	children: Array<LaidOutChild>;
	lastBottom: number;
};

const buildColumn = (
	header: string,
	labels: Array<string>,
	headerY: number
): LaidOutCol => {
	const children = labels.map((label, idx) => {
		const y = headerY + HEADER_H + GAP + idx * (CHILD_H + GAP);
		return { label, y, midY: y + CHILD_H / 2 };
	});
	const lastBottom =
		children.length > 0
			? children[children.length - 1].y + CHILD_H
			: headerY + HEADER_H;
	return { header, children, lastBottom };
};

export const StructureMobile = ({
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

	const pairRows = [
		{
			left: {
				header: globalMarketsInvestment,
				children: [
					globalBrokerage,
					globalPortfolioManagement,
					globalProprietaryTrading,
					globalResearchConsulting,
					globalSales,
				],
			},
			right: {
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
		},
		{
			left: {
				header: operations,
				children: [
					depositaryCustodySettlements,
					backOffice,
					crm,
					onboarding,
				],
			},
			right: {
				header: finance,
				children: [treasury, accounting, reportingBudgeting],
			},
		},
	];

	const soloRow = {
		header: compliance,
		children: [
			humanResources,
			marketingCorporateCommunications,
			digitalProducts,
			itSupport,
			technicalSupport,
		],
	};

	let cursor = TOP_END_Y + SECTION_GAP;
	const pairLayout = pairRows.map(row => {
		const railY = cursor;
		const headerY = railY + RAIL_OFFSET;
		const left = buildColumn(row.left.header, row.left.children, headerY);
		const right = buildColumn(
			row.right.header,
			row.right.children,
			headerY
		);
		const lastBottom = Math.max(left.lastBottom, right.lastBottom);
		cursor = lastBottom + SECTION_GAP;
		return { railY, headerY, left, right, lastBottom };
	});

	const soloHeaderY = cursor;
	const solo = buildColumn(
		soloRow.header,
		soloRow.children,
		soloHeaderY
	);

	const spineEndY = soloHeaderY;
	const viewBoxH = solo.lastBottom + 20;

	const renderColumn = (
		col: LaidOutCol,
		headerX: number,
		childX: number,
		spineX: number,
		keyPrefix: string
	) => {
		const lastChildMidY =
			col.children.length > 0
				? col.children[col.children.length - 1].midY
				: col.lastBottom;
		const headerY = col.children[0]
			? col.children[0].y - GAP - HEADER_H
			: col.lastBottom - HEADER_H;
		const headerBottom = headerY + HEADER_H;

		return (
			<g key={keyPrefix}>
				<path
					d={`M${spineX} ${headerBottom}L${spineX} ${lastChildMidY}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				{col.children.map((child, j) => (
					<path
						key={`${keyPrefix}-stub-${j}`}
						d={`M${spineX} ${child.midY}L${childX} ${child.midY}`}
						stroke="#B9B9B9"
						strokeLinecap="round"
					/>
				))}
				<rect
					x={headerX}
					y={headerY}
					width={COL_W}
					height={HEADER_H}
					rx="0"
					fill="#000000"
				/>
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
					html={col.header}
					x={headerX}
					y={headerY}
					width={COL_W}
					height={HEADER_H}
					
				/>
				{col.children.map((child, j) => (
					<g key={`${keyPrefix}-child-${j}`}>
						<rect
							x={childX}
							y={child.y}
							width={CHILD_W}
							height={CHILD_H}
							rx="0"
							fill="#000000"
						/>
						<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
							html={child.label}
							x={childX}
							y={child.y}
							width={CHILD_W}
							height={CHILD_H}
							
						/>
					</g>
				))}
			</g>
		);
	};

	return (
		<div className={css.root}>
			<svg
				className={css.svg}
				viewBox={`0 0 356 ${viewBoxH}`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d={`M${CENTRAL_SPINE_X} 58L${CENTRAL_SPINE_X} 137`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d={`M${CENTRAL_SPINE_X} 98L210 98`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d={`M${CENTRAL_SPINE_X} ${TOP_END_Y}L${CENTRAL_SPINE_X} ${spineEndY}`}
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>

				{pairLayout.map((row, i) => (
					<g key={`rail-${i}`}>
						<path
							d={`M${COL_A_CENTER} ${row.railY}L${COL_B_CENTER} ${row.railY}`}
							stroke="#B9B9B9"
							strokeLinecap="round"
						/>
						<path
							d={`M${COL_A_CENTER} ${row.railY}L${COL_A_CENTER} ${row.headerY}`}
							stroke="#B9B9B9"
							strokeLinecap="round"
						/>
						<path
							d={`M${COL_B_CENTER} ${row.railY}L${COL_B_CENTER} ${row.headerY}`}
							stroke="#B9B9B9"
							strokeLinecap="round"
						/>
					</g>
				))}

				<rect
					x={TOP_CARD_X}
					y="0"
					width={TOP_CARD_W}
					height={TOP_CARD_H}
					rx="0"
					fill="#000000"
				/>
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
					html={shareholdersMeeting}
					x={TOP_CARD_X}
					y={0}
					width={TOP_CARD_W}
					height={TOP_CARD_H}
					
				/>

				<rect x="210" y="69" width="140" height={TOP_CARD_H} rx="0" fill="#000000" />
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
					html={internalAudit}
					x={210}
					y={69}
					width={140}
					height={TOP_CARD_H}
					
				/>

				<rect
					x={TOP_CARD_X}
					y="137"
					width={TOP_CARD_W}
					height={TOP_CARD_H}
					rx="0"
					fill="#000000"
				/>
				<SvgTextNode fontSize={fontSize} charWidthMultiplier={charWidthMultiplier}
					html={chiefExecutiveOfficer}
					x={TOP_CARD_X}
					y={137}
					width={TOP_CARD_W}
					height={TOP_CARD_H}
					
				/>

				{pairLayout.map((row, i) => (
					<g key={`row-${i}`}>
						{renderColumn(
							row.left,
							COL_A_X,
							COL_A_CHILD_X,
							COL_A_SPINE_X,
							`row-${i}-left`
						)}
						{renderColumn(
							row.right,
							COL_B_X,
							COL_B_CHILD_X,
							COL_B_SPINE_X,
							`row-${i}-right`
						)}
					</g>
				))}

				{renderColumn(
					solo,
					SOLO_X,
					SOLO_CHILD_X,
					SOLO_SPINE_X,
					'solo'
				)}
			</svg>
		</div>
	);
};
