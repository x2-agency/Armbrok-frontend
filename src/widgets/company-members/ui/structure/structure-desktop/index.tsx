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
					rx="16"
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
					rx="16"
					fill="url(#paint1_linear_7190_9650)"
				/>
				<foreignObject x="480" y="150" width="240" height="58">
					<div className={css.graphCustomContent}>
						{parser(chiefExecutiveOfficer)}
					</div>
				</foreignObject>
				<path
					d="M606 150C606 151.591 605.368 153.117 604.243 154.243C603.117 155.368 601.591 156 600 156C598.409 156 596.883 155.368 595.757 154.243C594.632 153.117 594 151.591 594 150L600 150H606Z"
					fill="white"
				/>
				<path
					d="M594 208C594 206.409 594.632 204.883 595.757 203.757C596.883 202.632 598.409 202 600 202C601.591 202 603.117 202.632 604.243 203.757C605.368 204.883 606 206.409 606 208L600 208L594 208Z"
					fill="white"
				/>
				<path
					d="M597.25 150.004C597.25 148.485 598.481 147.254 600 147.254C601.519 147.254 602.75 148.485 602.75 150.004C602.75 151.523 601.519 152.754 600 152.754C598.481 152.754 597.25 151.523 597.25 150.004Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<rect
					x="345"
					y="77"
					width="195"
					height="58"
					rx="16"
					fill="url(#paint2_linear_7190_9650)"
				/>
				<foreignObject x="345" y="77" width="195" height="58">
					<div className={css.graphCustomContent}>{parser(internalAudit)}</div>
				</foreignObject>
				<path d="M600 244L600 209.982" stroke="#B9B9B9" strokeLinecap="round" />
				<path
					d="M597.25 208C597.25 206.481 598.481 205.25 600 205.25C601.519 205.25 602.75 206.481 602.75 208C602.75 209.519 601.519 210.75 600 210.75C598.481 210.75 597.25 209.519 597.25 208Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<path
					d="M1053 275L1052.8 259.787C1052.68 251.034 1045.55 244 1036.8 244L175 244C166.163 244 159 251.163 159 260V275"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M275 306L274.952 290.949C274.923 282.132 267.768 275 258.952 275H75C66.1634 275 59 282.163 59 291V306"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<path
					d="M673 307L672.956 291.953C672.93 283.135 665.774 276 656.956 276H491C482.163 276 475 283.163 475 292V307"
					stroke="#B9B9B9"
					strokeLinecap="round"
				/>
				<rect y="306" width="117" height="80" rx="16" fill="#F8F8F8" />
				<rect
					y="306"
					width="117"
					height="80"
					rx="16"
					fill="url(#paint3_linear_7190_9650)"
				/>
				<foreignObject y="306" width="117" height="80">
					<div className={css.graphCustomContent}>
						{parser(internationalMarkets)}
					</div>
				</foreignObject>
				<path
					d="M65 306C65 307.591 64.3679 309.117 63.2426 310.243C62.1174 311.368 60.5913 312 59 312C57.4087 312 55.8826 311.368 54.7574 310.243C53.6321 309.117 53 307.591 53 306L59 306H65Z"
					fill="white"
				/>
				<path
					d="M61.75 306C61.75 307.519 60.5188 308.75 59 308.75C57.4812 308.75 56.25 307.519 56.25 306C56.25 304.481 57.4812 303.25 59 303.25C60.5188 303.25 61.75 304.481 61.75 306Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<rect x="216" y="308" width="117" height="80" rx="16" fill="#F8F8F8" />
				<rect
					x="216"
					y="308"
					width="117"
					height="80"
					rx="16"
					fill="url(#paint4_linear_7190_9650)"
				/>
				<foreignObject x="216" y="308" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(localMarkets)}</div>
				</foreignObject>
				<path
					d="M281 308C281 309.591 280.368 311.117 279.243 312.243C278.117 313.368 276.591 314 275 314C273.409 314 271.883 313.368 270.757 312.243C269.632 311.117 269 309.591 269 308L275 308H281Z"
					fill="white"
				/>
				<path
					d="M277.75 308C277.75 309.519 276.519 310.75 275 310.75C273.481 310.75 272.25 309.519 272.25 308C272.25 306.481 273.481 305.25 275 305.25C276.519 305.25 277.75 306.481 277.75 308Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<rect x="416" y="308" width="117" height="80" rx="16" fill="#F8F8F8" />
				<rect
					x="416"
					y="308"
					width="117"
					height="80"
					rx="16"
					fill="url(#paint5_linear_7190_9650)"
				/>
				<foreignObject x="416" y="308" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(operations)}</div>
				</foreignObject>
				<path
					d="M481 308C481 309.591 480.368 311.117 479.243 312.243C478.117 313.368 476.591 314 475 314C473.409 314 471.883 313.368 470.757 312.243C469.632 311.117 469 309.591 469 308L475 308H481Z"
					fill="white"
				/>
				<path
					d="M477.75 308C477.75 309.519 476.519 310.75 475 310.75C473.481 310.75 472.25 309.519 472.25 308C472.25 306.481 473.481 305.25 475 305.25C476.519 305.25 477.75 306.481 477.75 308Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<rect x="614" y="308" width="117" height="80" rx="16" fill="#F8F8F8" />
				<rect
					x="614"
					y="308"
					width="117"
					height="80"
					rx="16"
					fill="url(#paint6_linear_7190_9650)"
				/>
				<foreignObject x="614" y="308" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(depository)}</div>
				</foreignObject>
				<path
					d="M679 308C679 309.591 678.368 311.117 677.243 312.243C676.117 313.368 674.591 314 673 314C671.409 314 669.883 313.368 668.757 312.243C667.632 311.117 667 309.591 667 308L673 308H679Z"
					fill="white"
				/>
				<path
					d="M675.75 308C675.75 309.519 674.519 310.75 673 310.75C671.481 310.75 670.25 309.519 670.25 308C670.25 306.481 671.481 305.25 673 305.25C674.519 305.25 675.75 306.481 675.75 308Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<rect x="815" y="306" width="117" height="80" rx="16" fill="#F8F8F8" />
				<rect
					x="815"
					y="306"
					width="117"
					height="80"
					rx="16"
					fill="url(#paint7_linear_7190_9650)"
				/>
				<foreignObject x="815" y="306" width="117" height="80">
					<div className={css.graphCustomContent}>{parser(finance)}</div>
				</foreignObject>
				<path
					d="M880 306C880 307.591 879.368 309.117 878.243 310.243C877.117 311.368 875.591 312 874 312C872.409 312 870.883 311.368 869.757 310.243C868.632 309.117 868 307.591 868 306L874 306H880Z"
					fill="white"
				/>
				<path
					d="M876.75 306C876.75 307.519 875.519 308.75 874 308.75C872.481 308.75 871.25 307.519 871.25 306C871.25 304.481 872.481 303.25 874 303.25C875.519 303.25 876.75 304.481 876.75 306Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<rect x="1084" y="277" width="116" height="59" rx="16" fill="#F8F8F8" />
				<rect
					x="1084"
					y="277"
					width="116"
					height="59"
					rx="16"
					fill="url(#paint8_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="277" width="116" height="59">
					<div className={css.graphCustomContent}>{parser(it)}</div>
				</foreignObject>
				<rect x="1084" y="444" width="116" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="1084"
					y="444"
					width="116"
					height="69"
					rx="16"
					fill="url(#paint9_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="444" width="116" height="69">
					<div className={css.graphCustomContent}>{parser(marketing)}</div>
				</foreignObject>
				<rect x="1084" y="526" width="116" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="1084"
					y="526"
					width="116"
					height="69"
					rx="16"
					fill="url(#paint10_linear_7190_9650)"
				/>
				<foreignObject x="1084" y="526" width="116" height="69">
					<div className={css.graphCustomContent}>{parser(hr)}</div>
				</foreignObject>
				<rect x="1084" y="349" width="116" height="82" rx="16" fill="#F8F8F8" />
				<rect
					x="1084"
					y="349"
					width="116"
					height="82"
					rx="16"
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
				<rect x="90" y="445" width="133" height="59" rx="16" fill="#F8F8F8" />
				<rect
					x="90"
					y="445"
					width="133"
					height="59"
					rx="16"
					fill="url(#paint12_linear_7190_9650)"
				/>
				<foreignObject x="90" y="445" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(brokerage)}</div>
				</foreignObject>
				<rect x="90" y="612" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="90"
					y="612"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint13_linear_7190_9650)"
				/>
				<foreignObject x="90" y="612" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(propTrading)}</div>
				</foreignObject>
				<rect x="90" y="694" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="90"
					y="694"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint14_linear_7190_9650)"
				/>
				<foreignObject x="90" y="694" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(research)}</div>
				</foreignObject>
				<rect x="90" y="517" width="133" height="82" rx="16" fill="#F8F8F8" />
				<rect
					x="90"
					y="517"
					width="133"
					height="82"
					rx="16"
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
				<rect x="704" y="444" width="133" height="59" rx="16" fill="#F8F8F8" />
				<rect
					x="704"
					y="444"
					width="133"
					height="59"
					rx="16"
					fill="url(#paint16_linear_7190_9650)"
				/>
				<foreignObject x="704" y="444" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(custody)}</div>
				</foreignObject>
				<rect x="704" y="611" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="704"
					y="611"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint17_linear_7190_9650)"
				/>
				<foreignObject x="704" y="611" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(registrar)}</div>
				</foreignObject>
				<rect x="704" y="516" width="133" height="82" rx="16" fill="#F8F8F8" />
				<rect
					x="704"
					y="516"
					width="133"
					height="82"
					rx="16"
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
				<rect x="506" y="444" width="133" height="59" rx="16" fill="#F8F8F8" />
				<rect
					x="506"
					y="444"
					width="133"
					height="59"
					rx="16"
					fill="url(#paint19_linear_7190_9650)"
				/>
				<foreignObject x="506" y="444" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(backOffice)}</div>
				</foreignObject>
				<rect x="506" y="516" width="133" height="82" rx="16" fill="#F8F8F8" />
				<rect
					x="506"
					y="516"
					width="133"
					height="82"
					rx="16"
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
				<rect x="306" y="445" width="133" height="59" rx="16" fill="#F8F8F8" />
				<rect
					x="306"
					y="445"
					width="133"
					height="59"
					rx="16"
					fill="url(#paint21_linear_7190_9650)"
				/>
				<foreignObject x="306" y="445" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(brokerage)}</div>
				</foreignObject>
				<rect x="306" y="612" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="306"
					y="612"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint22_linear_7190_9650)"
				/>
				<foreignObject x="306" y="612" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(propTrading)}</div>
				</foreignObject>
				<rect x="306" y="694" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="306"
					y="694"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint23_linear_7190_9650)"
				/>
				<foreignObject x="306" y="694" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(research)}</div>
				</foreignObject>
				<path d="M275 810L306 810" stroke="#B9B9B9" strokeLinecap="round" />
				<path d="M275 897L306 897" stroke="#B9B9B9" strokeLinecap="round" />
				<rect x="306" y="776" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="306"
					y="776"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint24_linear_7190_9650)"
				/>
				<foreignObject x="306" y="776" width="133" height="69">
					<div className={css.graphCustomContent}>
						{parser(investmentBanking)}
					</div>
				</foreignObject>
				<rect x="306" y="858" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="306"
					y="858"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint25_linear_7190_9650)"
				/>
				<foreignObject x="306" y="858" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(advisory)}</div>
				</foreignObject>
				<rect x="306" y="517" width="133" height="82" rx="16" fill="#F8F8F8" />
				<rect
					x="306"
					y="517"
					width="133"
					height="82"
					rx="16"
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
				<rect x="905" y="445" width="133" height="59" rx="16" fill="#F8F8F8" />
				<rect
					x="905"
					y="445"
					width="133"
					height="59"
					rx="16"
					fill="url(#paint27_linear_7190_9650)"
				/>
				<foreignObject x="905" y="445" width="133" height="59">
					<div className={css.graphCustomContent}>{parser(treasury)}</div>
				</foreignObject>
				<rect x="905" y="612" width="133" height="69" rx="16" fill="#F8F8F8" />
				<rect
					x="905"
					y="612"
					width="133"
					height="69"
					rx="16"
					fill="url(#paint28_linear_7190_9650)"
				/>
				<foreignObject x="905" y="612" width="133" height="69">
					<div className={css.graphCustomContent}>{parser(onboarding)}</div>
				</foreignObject>
				<rect x="905" y="517" width="133" height="82" rx="16" fill="#F8F8F8" />
				<rect
					x="905"
					y="517"
					width="133"
					height="82"
					rx="16"
					fill="url(#paint29_linear_7190_9650)"
				/>
				<foreignObject x="905" y="517" width="133" height="82">
					<div className={css.graphCustomContent}>{parser(accounting)}</div>
				</foreignObject>
				<path
					d="M53 386C53 384.409 53.6321 382.883 54.7574 381.757C55.8826 380.632 57.4087 380 59 380C60.5913 380 62.1174 380.632 63.2426 381.757C64.3679 382.883 65 384.409 65 386L59 386H53Z"
					fill="white"
				/>
				<path
					d="M53 386C53 384.409 53.6321 382.883 54.7574 381.757C55.8826 380.632 57.4087 380 59 380C60.5913 380 62.1174 380.632 63.2426 381.757C64.3679 382.883 65 384.409 65 386L59 386H53Z"
					fill="white"
				/>
				<path
					d="M56.25 386C56.25 384.481 57.4812 383.25 59 383.25C60.5188 383.25 61.75 384.481 61.75 386C61.75 387.519 60.5188 388.75 59 388.75C57.4812 388.75 56.25 387.519 56.25 386Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<path
					d="M269 388C269 386.409 269.632 384.883 270.757 383.757C271.883 382.632 273.409 382 275 382C276.591 382 278.117 382.632 279.243 383.757C280.368 384.883 281 386.409 281 388L275 388H269Z"
					fill="white"
				/>
				<path
					d="M269 388C269 386.409 269.632 384.883 270.757 383.757C271.883 382.632 273.409 382 275 382C276.591 382 278.117 382.632 279.243 383.757C280.368 384.883 281 386.409 281 388L275 388H269Z"
					fill="white"
				/>
				<path
					d="M272.25 388C272.25 386.481 273.481 385.25 275 385.25C276.519 385.25 277.75 386.481 277.75 388C277.75 389.519 276.519 390.75 275 390.75C273.481 390.75 272.25 389.519 272.25 388Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<path
					d="M469 388C469 386.409 469.632 384.883 470.757 383.757C471.883 382.632 473.409 382 475 382C476.591 382 478.117 382.632 479.243 383.757C480.368 384.883 481 386.409 481 388L475 388H469Z"
					fill="white"
				/>
				<path
					d="M469 388C469 386.409 469.632 384.883 470.757 383.757C471.883 382.632 473.409 382 475 382C476.591 382 478.117 382.632 479.243 383.757C480.368 384.883 481 386.409 481 388L475 388H469Z"
					fill="white"
				/>
				<path
					d="M472.25 388C472.25 386.481 473.481 385.25 475 385.25C476.519 385.25 477.75 386.481 477.75 388C477.75 389.519 476.519 390.75 475 390.75C473.481 390.75 472.25 389.519 472.25 388Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<path
					d="M667 388C667 386.409 667.632 384.883 668.757 383.757C669.883 382.632 671.409 382 673 382C674.591 382 676.117 382.632 677.243 383.757C678.368 384.883 679 386.409 679 388L673 388H667Z"
					fill="white"
				/>
				<path
					d="M667 388C667 386.409 667.632 384.883 668.757 383.757C669.883 382.632 671.409 382 673 382C674.591 382 676.117 382.632 677.243 383.757C678.368 384.883 679 386.409 679 388L673 388H667Z"
					fill="white"
				/>
				<path
					d="M670.25 388C670.25 386.481 671.481 385.25 673 385.25C674.519 385.25 675.75 386.481 675.75 388C675.75 389.519 674.519 390.75 673 390.75C671.481 390.75 670.25 389.519 670.25 388Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
				<path
					d="M868 388C868 386.409 868.632 384.883 869.757 383.757C870.883 382.632 872.409 382 874 382C875.591 382 877.117 382.632 878.243 383.757C879.368 384.883 880 386.409 880 388L874 388H868Z"
					fill="white"
				/>
				<path
					d="M868 388C868 386.409 868.632 384.883 869.757 383.757C870.883 382.632 872.409 382 874 382C875.591 382 877.117 382.632 878.243 383.757C879.368 384.883 880 386.409 880 388L874 388H868Z"
					fill="white"
				/>
				<path
					d="M871.25 388C871.25 386.481 872.481 385.25 874 385.25C875.519 385.25 876.75 386.481 876.75 388C876.75 389.519 875.519 390.75 874 390.75C872.481 390.75 871.25 389.519 871.25 388Z"
					fill="white"
					stroke="#3E3E3E"
					strokeWidth="1.5"
				/>
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
