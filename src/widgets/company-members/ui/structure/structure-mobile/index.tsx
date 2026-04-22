import parser from 'html-react-parser';

import type { StructureTreeProps } from '@/shared/types/global.types';

import css from './index.module.css';

export const StructureMobile = ({
	shareholdersMeeting = '',
	settlements = '',
	internalAudit = '',
	internationalMarkets = '',
	investmentBanking = '',
	it = '',
	backOffice = '',
	brokerage = '',
	registrar = '',
	research = '',
	localMarkets = '',
	chiefExecutiveOfficer = '',
	custody = '',
	accounting = '',
	advisory = '',
	assetManagement = '',
	finance = '',
	depository = '',
	digitalProducts = '',
	marketing = '',
	middleOffice = '',
	hr = '',
	onboarding = '',
	operations = '',
	propTrading = '',
	treasury = '',
}: StructureTreeProps) => {
	return (
		<div className={css.root}>
			<svg
				className={css.svg}
				viewBox="0 0 356 1600"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M158 137L158 58" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M158 1277L158 193" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M158 98.0001L189 98" stroke="#B9B9B9" strokeLinecap="round" />
				<rect
					x="26"
					width="259"
					height="58"
					rx="0"
					fill="url(#paint0_linear_361_3314)"
				/>
				<foreignObject x="26" width="259" height="58">
					<div className={css.graphCustomContent}>
						{parser(shareholdersMeeting)}
					</div>
				</foreignObject>
				<rect
					x="189"
					y="69"
					width="168"
					height="58"
					rx="0"
					fill="url(#paint1_linear_361_3314)"
				/>
				<foreignObject x="189" y="69" width="168" height="58">
					<div className={css.graphCustomContent}>{parser(internalAudit)}</div>
				</foreignObject>
				<rect
					x="28"
					y="137"
					width="259"
					height="58"
					rx="0"
					fill="url(#paint2_linear_361_3314)"
				/>
				<foreignObject x="28" y="137" width="259" height="58">
					<div className={css.graphCustomContent}>
						{parser(chiefExecutiveOfficer)}
					</div>
				</foreignObject>
				<path
					d="M242 252L242 221L74 221L74 252"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M242 940L242 909L74 909L74 940"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M196 1308L196 1277L74 1277L74 1308"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M74.0001 330L74 310" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M74.0001 408L74 388" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M74.0001 512L74 492" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M74.0001 616L74 596" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M74.0001 1018L74 998"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M74.0001 1122L74 1102"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M74.0001 1386L74 1366"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M196 1337L211 1337" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M196 1418L211 1418" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M196 1499L211 1499" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M196 1567L211 1567" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M196.001 1567L196 1308"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M74.0001 1464L74 1444"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M74.0001 1542L74 1522"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M242 1018L242 998" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 1096L242 1076" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 1174L242 1154" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 616L242 596" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 694L242 674" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 798L242 778" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 512L242 492" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 408L242 388" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M242 330L242 310" stroke="#B9B9B9" strokeLinecap="round" />
				<rect
					y="252"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint3_linear_361_3314)"
				/>
				<foreignObject y="252" width="147" height="58">
					<div className={css.graphCustomContent}>
						{parser(internationalMarkets)}
					</div>
				</foreignObject>
				<rect
					y="940"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint4_linear_361_3314)"
				/>
				<foreignObject y="940" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(operations)}</div>
				</foreignObject>
				<rect
					y="1308"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint5_linear_361_3314)"
				/>

				<rect
					y="1308"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint6_linear_361_3314)"
				/>
				<foreignObject y="1308" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(finance)}</div>
				</foreignObject>
				<rect
					x="209"
					y="1308"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint7_linear_361_3314)"
				/>
				<foreignObject x="209" y="1308" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(it)}</div>
				</foreignObject>
				<rect
					x="209"
					y="1470"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint8_linear_361_3314)"
				/>
				<foreignObject x="209" y="1470" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(marketing)}</div>
				</foreignObject>
				<rect
					x="209"
					y="1538"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint9_linear_361_3314)"
				/>
				<foreignObject x="209" y="1538" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(hr)}</div>
				</foreignObject>
				<rect
					x="209"
					y="1376"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint10_linear_361_3314)"
				/>
				<foreignObject x="209" y="1376" width="147" height="84">
					<div className={css.graphCustomContent}>
						{parser(digitalProducts)}
					</div>
				</foreignObject>
				<rect
					y="1386"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint11_linear_361_3314)"
				/>
				<foreignObject y="1386" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(treasury)}</div>
				</foreignObject>
				<rect
					y="1464"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint12_linear_361_3314)"
				/>
				<foreignObject y="1464" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(accounting)}</div>
				</foreignObject>
				<rect
					y="1542"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint13_linear_361_3314)"
				/>
				<foreignObject y="1542" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(onboarding)}</div>
				</foreignObject>
				<rect
					y="1018"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint14_linear_361_3314)"
				/>
				<foreignObject y="1018" width="147" height="84">
					<div className={css.graphCustomContent}>{parser(backOffice)}</div>
				</foreignObject>
				<rect
					y="1123"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint15_linear_361_3314)"
				/>
				<foreignObject y="1123" width="147" height="84">
					<div className={css.graphCustomContent}>{parser(middleOffice)}</div>
				</foreignObject>
				<rect
					x="168"
					y="1018"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint16_linear_361_3314)"
				/>
				<foreignObject x="168" y="1018" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(custody)}</div>
				</foreignObject>
				<rect
					x="168"
					y="1096"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint17_linear_361_3314)"
				/>
				<foreignObject x="168" y="1096" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(settlements)}</div>
				</foreignObject>
				<rect
					x="168"
					y="1174"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint18_linear_361_3314)"
				/>
				<foreignObject x="168" y="1174" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(registrar)}</div>
				</foreignObject>
				<rect
					x="168"
					y="940"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint19_linear_361_3314)"
				/>
				<foreignObject x="168" y="940" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(depository)}</div>
				</foreignObject>
				<rect
					x="172"
					y="252"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint20_linear_361_3314)"
				/>
				<foreignObject x="172" y="252" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(localMarkets)}</div>
				</foreignObject>
				<rect
					y="330"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint21_linear_361_3314)"
				/>
				<foreignObject y="330" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(brokerage)}</div>
				</foreignObject>
				<rect
					y="408"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint22_linear_361_3314)"
				/>
				<foreignObject y="408" width="147" height="84">
					<div className={css.graphCustomContent}>
						{parser(assetManagement)}
					</div>
				</foreignObject>
				<rect
					y="512"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint23_linear_361_3314)"
				/>
				<foreignObject y="512" width="147" height="84">
					<div className={css.graphCustomContent}>{parser(propTrading)}</div>
				</foreignObject>
				<rect
					y="616"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint24_linear_361_3314)"
				/>
				<foreignObject y="616" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(research)}</div>
				</foreignObject>
				<rect
					x="168"
					y="616"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint25_linear_361_3314)"
				/>
				<foreignObject x="168" y="616" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(research)}</div>
				</foreignObject>
				<rect
					x="168"
					y="694"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint26_linear_361_3314)"
				/>
				<foreignObject x="168" y="694" width="147" height="84">
					<div className={css.graphCustomContent}>
						{parser(investmentBanking)}
					</div>
				</foreignObject>
				<rect
					x="168"
					y="798"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint27_linear_361_3314)"
				/>
				<foreignObject x="168" y="798" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(advisory)}</div>
				</foreignObject>
				<rect
					x="168"
					y="512"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint28_linear_361_3314)"
				/>
				<foreignObject x="168" y="512" width="147" height="84">
					<div className={css.graphCustomContent}>{parser(propTrading)}</div>
				</foreignObject>
				<rect
					x="168"
					y="408"
					width="147"
					height="84"
					rx="0"
					fill="url(#paint29_linear_361_3314)"
				/>
				<foreignObject x="168" y="408" width="147" height="84">
					<div className={css.graphCustomContent}>
						{parser(assetManagement)}
					</div>
				</foreignObject>
				<rect
					x="168"
					y="330"
					width="147"
					height="58"
					rx="0"
					fill="url(#paint30_linear_361_3314)"
				/>
				<foreignObject x="168" y="330" width="147" height="58">
					<div className={css.graphCustomContent}>{parser(brokerage)}</div>
				</foreignObject>
				<defs>
					<linearGradient
						id="paint0_linear_361_3314"
						x1="26"
						y1="58"
						x2="287.398"
						y2="14.3697"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_361_3314"
						x1="189"
						y1="127"
						x2="361.26"
						y2="108.35"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_361_3314"
						x1="28"
						y1="195"
						x2="289.398"
						y2="151.37"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_361_3314"
						x1="-1.6375e-07"
						y1="310"
						x2="151.138"
						y2="295.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_361_3314"
						x1="-1.6375e-07"
						y1="998"
						x2="151.138"
						y2="983.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_361_3314"
						x1="-1.6375e-07"
						y1="1366"
						x2="151.138"
						y2="1351.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint6_linear_361_3314"
						x1="-1.6375e-07"
						y1="1366"
						x2="151.138"
						y2="1351.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint7_linear_361_3314"
						x1="209"
						y1="1366"
						x2="360.138"
						y2="1351.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_361_3314"
						x1="209"
						y1="1528"
						x2="360.138"
						y2="1513.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint9_linear_361_3314"
						x1="209"
						y1="1596"
						x2="360.138"
						y2="1581.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint10_linear_361_3314"
						x1="209"
						y1="1460"
						x2="360.845"
						y2="1450.07"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint11_linear_361_3314"
						x1="-1.6375e-07"
						y1="1444"
						x2="151.138"
						y2="1429.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint12_linear_361_3314"
						x1="-1.6375e-07"
						y1="1522"
						x2="151.138"
						y2="1507.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint13_linear_361_3314"
						x1="-1.6375e-07"
						y1="1600"
						x2="151.138"
						y2="1585.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint14_linear_361_3314"
						x1="-1.6375e-07"
						y1="1102"
						x2="151.845"
						y2="1092.07"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint15_linear_361_3314"
						x1="-1.6375e-07"
						y1="1207"
						x2="151.845"
						y2="1197.07"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint16_linear_361_3314"
						x1="168"
						y1="1076"
						x2="319.138"
						y2="1061.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint17_linear_361_3314"
						x1="168"
						y1="1154"
						x2="319.138"
						y2="1139.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint18_linear_361_3314"
						x1="168"
						y1="1232"
						x2="319.138"
						y2="1217.68"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint19_linear_361_3314"
						x1="168"
						y1="998"
						x2="319.138"
						y2="983.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint20_linear_361_3314"
						x1="172"
						y1="310"
						x2="323.138"
						y2="295.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint21_linear_361_3314"
						x1="-1.6375e-07"
						y1="388"
						x2="151.138"
						y2="373.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint22_linear_361_3314"
						x1="-1.6375e-07"
						y1="492"
						x2="151.845"
						y2="482.068"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint23_linear_361_3314"
						x1="-1.6375e-07"
						y1="596"
						x2="151.845"
						y2="586.068"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint24_linear_361_3314"
						x1="-1.6375e-07"
						y1="674"
						x2="151.138"
						y2="659.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint25_linear_361_3314"
						x1="168"
						y1="674"
						x2="319.138"
						y2="659.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint26_linear_361_3314"
						x1="168"
						y1="778"
						x2="319.845"
						y2="768.068"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint27_linear_361_3314"
						x1="168"
						y1="856"
						x2="319.138"
						y2="841.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint28_linear_361_3314"
						x1="168"
						y1="596"
						x2="319.845"
						y2="586.068"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint29_linear_361_3314"
						x1="168"
						y1="492"
						x2="319.845"
						y2="482.068"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint30_linear_361_3314"
						x1="168"
						y1="388"
						x2="319.138"
						y2="373.682"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<clipPath id="clip0_361_3314">
						<rect
							width="183"
							height="26"
							fill="white"
							transform="translate(66 153)"
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};
