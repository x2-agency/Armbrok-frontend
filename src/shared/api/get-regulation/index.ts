import apiClient from '@/shared/api/api-client';

const regulationData = {
	data: {
		id: 37,
		documentId: "d49y5s4e5gkxgyoe6ixbbcke",
		title: "Regulation",
		createdAt: "2025-12-12T18:46:41.143Z",
		updatedAt: "2025-12-12T20:01:18.709Z",
		publishedAt: "2025-12-12T20:01:18.773Z",
		locale: "en",
		laws: {
			id: 2254,
			title: "Laws & Legal Acts",
			description: null,
			enabled: true,
			documents: [
				{
					id: 119,
					documentId: "wza4y6h9g84eoqvu4u9kykwo",
					name: "Law of RA on The Central Bank of Armenia",
					createdAt: "2025-02-25T18:36:00.760Z",
					updatedAt: "2025-03-31T19:19:42.886Z",
					file: {
						id: 1280,
						documentId: "lxtq8kfjaa75rrnu1tuny7cj",
						name: "central-bank-law.pdf",
						alternativeText: null,
						caption: null,
						formats: null,
						mime: "application/pdf",
						ext: ".pdf",
						url: "https://armbrok-storage.s3.eu-north-1.amazonaws.com/central_bank_law_24ffa80a5c.pdf",
						previewUrl: null
					}
				},
				{
					id: 120,
					documentId: "u684o8lw1vwo7yma26lrg8r7",
					name: "Law of RA on Currency Regulation and Currency Control",
					createdAt: "2025-02-25T18:36:47.613Z",
					updatedAt: "2025-03-31T19:24:32.439Z",
					file: {
						id: 1281,
						documentId: "qb8pi1pxtg8rot1zak0dwtiz",
						name: "Law_on_currency_regulation_and_currency_control.pdf",
						alternativeText: null,
						caption: null,
						formats: null,
						mime: "application/pdf",
						ext: ".pdf",
						url: "https://armbrok-storage.s3.eu-north-1.amazonaws.com/Law_on_currency_regulation_and_currency_control_885cd058c4.pdf",
						previewUrl: null
					}
				},
				{
					id: 121,
					documentId: "taqn5wsjgm198bj45d5yv7yi",
					name: "Law of RA on Covered Mortgage Bonds",
					createdAt: "2025-02-25T18:39:08.376Z",
					updatedAt: "2025-03-31T19:25:10.275Z",
					file: {
						id: 1282,
						documentId: "y4tb8cx34dytcd78n64cfkq6",
						name: "Law_on_covered_mortgage_bonds.pdf",
						alternativeText: null,
						caption: null,
						formats: null,
						mime: "application/pdf",
						ext: ".pdf",
						url: "https://armbrok-storage.s3.eu-north-1.amazonaws.com/Law_on_covered_mortgage_bonds_f534aa3d04.pdf",
						previewUrl: null
					}
				},
				{
					id: 122,
					documentId: "fun7ws3k29rtk52t7swo24ay",
					name: "Law of RA on Asset Securitization and Asset Backed Securities",
					createdAt: "2025-02-25T18:39:52.946Z",
					updatedAt: "2025-03-31T19:27:06.371Z",
					file: {
						id: 1283,
						documentId: "m4cal7eemn47f1jsda26ywrm",
						name: "Law_on_asset_Securitization_and_asset_backed_securities.pdf",
						alternativeText: null,
						caption: null,
						formats: null,
						mime: "application/pdf",
						ext: ".pdf",
						url: "https://armbrok-storage.s3.eu-north-1.amazonaws.com/Law_on_asset_Securitization_and_asset_backed_securities_248da5b7b4.pdf",
						previewUrl: null
					}
				},
				{
					id: 124,
					documentId: "dmvphiawv7byokhlhgdc0wui",
					name: "Law on Combating Money Laundering and Terrorism Financing",
					createdAt: "2025-02-25T18:41:13.271Z",
					updatedAt: "2025-03-31T19:28:12.255Z",
					file: {
						id: 1284,
						documentId: "mzyk3uxrz5ua0d40wsdyn8u0",
						name: "law_on_combating_money_laundering_and_terrorism_financing_eng.pdf",
						alternativeText: null,
						caption: null,
						formats: null,
						mime: "application/pdf",
						ext: ".pdf",
						url: "https://armbrok-storage.s3.eu-north-1.amazonaws.com/law_on_combating_money_laundering_and_terrorism_financing_eng_30f3172d5f.pdf",
						previewUrl: null
					}
				}
			]
		},
		stockExchangeRules: {
			id: 2255,
			title: "Stock Exchange and Central Depositary Rules",
			description: null,
			enabled: true,
			documents: [
				{
					id: 125,
					documentId: "mv4jbjaotblr4wa6czia52wk",
					name: "Rules of Armenia Stock Exchange",
					createdAt: "2025-02-25T18:44:04.858Z",
					updatedAt: "2025-02-25T18:44:04.858Z",
					file: null
				},
				{
					id: 126,
					documentId: "nmb8m2gzkkh0n3emoo7c8n65",
					name: "Central Depository of Armenia rules",
					createdAt: "2025-02-25T18:45:21.945Z",
					updatedAt: "2025-02-25T18:45:25.739Z",
					file: null
				}
			]
		},
		seo: null,
		internalRules: {
			id: 10,
			title: "Internal Rules",
			links: [
				{
					id: 125828,
					text: "Brokerage (Dealer) Activity Rules",
					link: "brokerage-activity-rules"
				},
				{
					id: 125829,
					text: "Custody Service Rules",
					link: "custody-service-rules"
				},
				{
					id: 125830,
					text: "Regulation on Document Flow and Information Exchange for Investment and Non-Core Services",
					link: "regulation-on-document-flow-and-information-exchange-for-investment-and-non-core-services"
				},
				{
					id: 125831,
					text: "Agreement on Brokerage and Custody Services in Financial Markets",
					link: "agreement-on-brokerage-and-custody-services-in-financial-markets"
				}
			]
		}
	},
	meta: {}
};

export const getRegulation = async () => {
	try {
		const response = await apiClient.get('/regulations-page');

		return response.data;
	} catch (error) {
		console.error(error);
		return null
	}
};
