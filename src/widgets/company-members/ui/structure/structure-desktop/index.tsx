import parser from 'html-react-parser';

import type { StructureTreeProps } from '@/shared/types/global.types';

import css from './index.module.css';

export const StructureDesktop = ({
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
				viewBox="0 0 1200 927"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="450"
					width="300"
					height="58"
					rx="0"
					fill="url(#paint0_linear_7190_9650)"
				/>
				<foreignObject x="450" width="300" height="58">
					<div className={css.graphCustomContent}>
						{parser(shareholdersMeeting)}
					</div>
				</foreignObject>
				<path
					d="M599.999 151L599.999 58"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M580 275L580 244" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M1053 306L1053 275" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M1053 565L1053 275" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M1053 306L1084 306" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M1053 390L1084 390" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M1053 478L1084 478" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M1053 565L1084 565" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M873.999 306L873.999 244"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M540 106L600 106" stroke="#B9B9B9" strokeLinecap="round" />
				<rect
					x="480"
					y="150"
					width="240"
					height="58"
					rx="0"
					fill="url(#paint1_linear_7190_9650)"
				/>
				<foreignObject x="480" y="150" width="240" height="58">
					<div className={css.graphCustomContent}>
						{parser(chiefExecutiveOfficer)}
					</div>
				</foreignObject>
				<rect
					x="345"
					y="77"
					width="195"
					height="58"
					rx="0"
					fill="url(#paint2_linear_7190_9650)"
				/>
				<foreignObject x="345" y="77" width="195" height="58">
					<div className={css.graphCustomContent}>{parser(internalAudit)}</div>
				</foreignObject>
				<path d="M600 244L600 209.982" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M1053 275L1053 244L159 244L159 275"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M275 306L275 275L59 275L59 306"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M673 307L673 276L475 276L475 307"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<rect y="306" width="117" height="80" rx="0" fill="#F8F8F8" />
				<rect
					y="306"
					width="117"
					height="80"
					rx="0"
					fill="url(#paint3_linear_7190_9650)"
				/>
				<foreignObject y="306" width="117" height="80">
					<div className={css.graphCustomContent}>
						{parser(internationalMarkets)}
					</div>
				</foreignObject>
				<rect x="216" y="308" width="117" height="80" rx="0" fill="#F8F8F8" />
				<rect
					x="216"
					y="308"
					width="117"
					height="80"
					rx="0"
					fill="url(#paint4_linear_7190_9650)"
				/>
				<foreignObject x="216" y="308" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(localMarkets)}</div>
				</foreignObject>
				<rect x="416" y="308" width="117" height="80" rx="0" fill="#F8F8F8" />
				<rect
					x="416"
					y="308"
					width="117"
					height="80"
					rx="0"
					fill="url(#paint5_linear_7190_9650)"
				/>
				<foreignObject x="416" y="308" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(operations)}</div>
				</foreignObject>
				<rect x="614" y="308" width="117" height="80" rx="0" fill="#F8F8F8" />
				<rect
					x="614"
					y="308"
					width="117"
					height="80"
					rx="0"
					fill="url(#paint6_linear_7190_9650)"
				/>
				<foreignObject x="614" y="308" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(depository)}</div>
				</foreignObject>
				<rect x="815" y="306" width="117" height="80" rx="0" fill="#F8F8F8" />
				<rect
					x="815"
					y="306"
					width="117"
					height="80"
					rx="0"
					fill="url(#paint7_linear_7190_9650)"
				/>
				<foreignObject x="815" y="306" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(finance)}</div>
				</foreignObject>
				<rect x="1084" y="277" width="116" height="59" rx="0" fill="#F8F8F8" />
				<rect
					x="1084"
					y="277"
					width="116"
					height="59"
					rx="0"
					fill="url(#paint8_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="277" width="116" height="59">
					<div className={css.graphCustomContent}>{parser(it)}</div>
				</foreignObject>
				<rect x="1084" y="444" width="116" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="1084"
					y="444"
					width="116"
					height="69"
					rx="0"
					fill="url(#paint9_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="444" width="116" height="69">
					<div className={css.graphCustomContent}>{parser(marketing)}</div>
				</foreignObject>
				<rect x="1084" y="526" width="116" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="1084"
					y="526"
					width="116"
					height="69"
					rx="0"
					fill="url(#paint10_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="526" width="116" height="69">
					<div className={css.graphCustomContent}>{parser(hr)}</div>
				</foreignObject>
				<rect x="1084" y="349" width="116" height="82" rx="0" fill="#F8F8F8" />
				<rect
					x="1084"
					y="349"
					width="116"
					height="82"
					rx="0"
					fill="url(#paint11_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="349" width="116" height="82">
					<div className={css.graphCustomContent}>
						{parser(digitalProducts)}
					</div>
				</foreignObject>
				<path d="M58.9999 474L59 443" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M58.9998 733L59 389" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M59 474L90 474" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M59 558L90 558" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M59 646L90 646" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M59 733L90 733" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="90" y="445" width="133" height="59" rx="0" fill="#F8F8F8" />
				<rect
					x="90"
					y="445"
					width="133"
					height="59"
					rx="0"
					fill="url(#paint12_linear_7190_9650)"
				/>
				<foreignObject x="90" y="445" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(brokerage)}</div>
				</foreignObject>
				<rect x="90" y="612" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="90"
					y="612"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint13_linear_7190_9650)"
				/>
				<foreignObject x="90" y="612" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(propTrading)}</div>
				</foreignObject>
				<rect x="90" y="694" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="90"
					y="694"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint14_linear_7190_9650)"
				/>
				<foreignObject x="90" y="694" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(research)}</div>
				</foreignObject>
				<rect x="90" y="517" width="133" height="82" rx="0" fill="#F8F8F8" />
				<rect
					x="90"
					y="517"
					width="133"
					height="82"
					rx="0"
					fill="url(#paint15_linear_7190_9650)"
				/>
				<foreignObject x="90" y="517" width="133" height="82">
					<div className={css.graphCustomContent}>
						{parser(assetManagement)}
					</div>
				</foreignObject>
				<path d="M673 473L673 442" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M673.003 645L673.003 388"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M673 473L704 473" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M673 557L704 557" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M673 645L704 645" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="704" y="444" width="133" height="59" rx="0" fill="#F8F8F8" />
				<rect
					x="704"
					y="444"
					width="133"
					height="59"
					rx="0"
					fill="url(#paint16_linear_7190_9650)"
				/>
				<foreignObject x="704" y="444" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(custody)}</div>
				</foreignObject>
				<rect x="704" y="611" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="704"
					y="611"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint17_linear_7190_9650)"
				/>
				<foreignObject x="704" y="611" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(registrar)}</div>
				</foreignObject>
				<rect x="704" y="516" width="133" height="82" rx="0" fill="#F8F8F8" />
				<rect
					x="704"
					y="516"
					width="133"
					height="82"
					rx="0"
					fill="url(#paint18_linear_7190_9650)"
				/>
				<foreignObject x="704" y="516" width="133" height="82">
					<div className={css.graphCustomContent}>{parser(settlements)}</div>
				</foreignObject>
				<path d="M475 473L475 442" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M475.002 557L475.002 389"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M475 473L506 473" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M475 557L506 557" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="506" y="444" width="133" height="59" rx="0" fill="#F8F8F8" />
				<rect
					x="506"
					y="444"
					width="133"
					height="59"
					rx="0"
					fill="url(#paint19_linear_7190_9650)"
				/>
				<foreignObject x="506" y="444" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(backOffice)}</div>
				</foreignObject>
				<rect x="506" y="516" width="133" height="82" rx="0" fill="#F8F8F8" />
				<rect
					x="506"
					y="516"
					width="133"
					height="82"
					rx="0"
					fill="url(#paint20_linear_7190_9650)"
				/>
				<foreignObject x="506" y="516" width="133" height="82">
					<div className={css.graphCustomContent}>{parser(middleOffice)}</div>
				</foreignObject>
				<path d="M275 474L275 443" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M275.002 897L275.002 391"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M275 474L306 474" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M275 558L306 558" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M275 646L306 646" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M275 733L306 733" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="306" y="445" width="133" height="59" rx="0" fill="#F8F8F8" />
				<rect
					x="306"
					y="445"
					width="133"
					height="59"
					rx="0"
					fill="url(#paint21_linear_7190_9650)"
				/>
				<foreignObject x="306" y="445" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(brokerage)}</div>
				</foreignObject>
				<rect x="306" y="612" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="306"
					y="612"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint22_linear_7190_9650)"
				/>
				<foreignObject x="306" y="612" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(propTrading)}</div>
				</foreignObject>
				<rect x="306" y="694" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="306"
					y="694"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint23_linear_7190_9650)"
				/>
				<foreignObject x="306" y="694" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(research)}</div>
				</foreignObject>
				<path d="M275 810L306 810" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M275 897L306 897" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="306" y="776" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="306"
					y="776"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint24_linear_7190_9650)"
				/>
				<foreignObject x="306" y="776" width="133" height="69">
					<div className={css.graphCustomContent}>
						{parser(investmentBanking)}
					</div>
				</foreignObject>
				<rect x="306" y="858" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="306"
					y="858"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint25_linear_7190_9650)"
				/>
				<foreignObject x="306" y="858" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(advisory)}</div>
				</foreignObject>
				<rect x="306" y="517" width="133" height="82" rx="0" fill="#F8F8F8" />
				<rect
					x="306"
					y="517"
					width="133"
					height="82"
					rx="0"
					fill="url(#paint26_linear_7190_9650)"
				/>
				<foreignObject x="306" y="517" width="133" height="82">
					<div className={css.graphCustomContent}>
						{parser(assetManagement)}
					</div>
				</foreignObject>
				<path d="M874 419L874 388" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M874.002 646L874.002 388"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path d="M874 474L905 474" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M874 558L905 558" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M874 646L905 646" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="905" y="445" width="133" height="59" rx="0" fill="#F8F8F8" />
				<rect
					x="905"
					y="445"
					width="133"
					height="59"
					rx="0"
					fill="url(#paint27_linear_7190_9650)"
				/>
				<foreignObject x="905" y="445" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(treasury)}</div>
				</foreignObject>
				<rect x="905" y="612" width="133" height="69" rx="0" fill="#F8F8F8" />
				<rect
					x="905"
					y="612"
					width="133"
					height="69"
					rx="0"
					fill="url(#paint28_linear_7190_9650)"
				/>
				<foreignObject x="905" y="612" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(onboarding)}</div>
				</foreignObject>
				<rect x="905" y="517" width="133" height="82" rx="0" fill="#F8F8F8" />
				<rect
					x="905"
					y="517"
					width="133"
					height="82"
					rx="0"
					fill="url(#paint29_linear_7190_9650)"
				/>
				<foreignObject x="905" y="517" width="133" height="82">
					<div className={css.graphCustomContent}>{parser(accounting)}</div>
				</foreignObject>
				<defs>
					<linearGradient
						id="paint0_linear_7190_9650"
						x1="450"
						y1="58"
						x2="750"
						y2="4.22628e-06"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_7190_9650"
						x1="480"
						y1="208"
						x2="723.154"
						y2="170.392"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_7190_9650"
						x1="345"
						y1="135"
						x2="544.144"
						y2="109.974"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_7190_9650"
						x1="-1.30332e-07"
						y1="386"
						x2="121.012"
						y2="379.385"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_7190_9650"
						x1="216"
						y1="388"
						x2="337.012"
						y2="381.385"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint5_linear_7190_9650"
						x1="416"
						y1="388"
						x2="537.012"
						y2="381.385"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint6_linear_7190_9650"
						x1="614"
						y1="388"
						x2="735.012"
						y2="381.385"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint7_linear_7190_9650"
						x1="815"
						y1="386"
						x2="936.012"
						y2="379.385"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint8_linear_7190_9650"
						x1="1084"
						y1="336"
						x2="1203.69"
						y2="327.204"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint9_linear_7190_9650"
						x1="1084"
						y1="513"
						x2="1203.86"
						y2="505.468"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint10_linear_7190_9650"
						x1="1084"
						y1="595"
						x2="1203.86"
						y2="587.468"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint11_linear_7190_9650"
						x1="1084"
						y1="431"
						x2="1204"
						y2="424.655"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint12_linear_7190_9650"
						x1="90"
						y1="504"
						x2="226.999"
						y2="492.457"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint13_linear_7190_9650"
						x1="90"
						y1="681"
						x2="227.259"
						y2="671.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint14_linear_7190_9650"
						x1="90"
						y1="763"
						x2="227.259"
						y2="753.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint15_linear_7190_9650"
						x1="90"
						y1="599"
						x2="227.466"
						y2="590.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint16_linear_7190_9650"
						x1="704"
						y1="503"
						x2="840.999"
						y2="491.457"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint17_linear_7190_9650"
						x1="704"
						y1="680"
						x2="841.259"
						y2="670.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint18_linear_7190_9650"
						x1="704"
						y1="598"
						x2="841.466"
						y2="589.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint19_linear_7190_9650"
						x1="506"
						y1="503"
						x2="642.999"
						y2="491.457"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint20_linear_7190_9650"
						x1="506"
						y1="598"
						x2="643.466"
						y2="589.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint21_linear_7190_9650"
						x1="306"
						y1="504"
						x2="442.999"
						y2="492.457"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint22_linear_7190_9650"
						x1="306"
						y1="681"
						x2="443.259"
						y2="671.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint23_linear_7190_9650"
						x1="306"
						y1="763"
						x2="443.259"
						y2="753.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint24_linear_7190_9650"
						x1="306"
						y1="845"
						x2="443.259"
						y2="835.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint25_linear_7190_9650"
						x1="306"
						y1="927"
						x2="443.259"
						y2="917.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint26_linear_7190_9650"
						x1="306"
						y1="599"
						x2="443.466"
						y2="590.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint27_linear_7190_9650"
						x1="905"
						y1="504"
						x2="1042"
						y2="492.457"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint28_linear_7190_9650"
						x1="905"
						y1="681"
						x2="1042.26"
						y2="671.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
					<linearGradient
						id="paint29_linear_7190_9650"
						x1="905"
						y1="599"
						x2="1042.47"
						y2="590.666"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#212121" />
						<stop offset="1" stopColor="#444444" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};
