export interface NavigationType {
	id: number;
	title: string;
	column?: Array<ItemType>;
}

export interface ItemType {
	id: number;
	text: string;
	href?: string;
}

export const NAVIGATION_TABLE_DATA: Array<NavigationType> = [
	{
		id: 1,
		title: 'Products&nbsp;and&nbsp;Services',
		column: [
			{ id: 1, text: 'Brokerage', href: '/brokerage' },
			{ id: 2, text: 'Asset Management', href: '/asset-management' },
			{ id: 3, text: 'Investment Funds', href: '#' },
			{ id: 4, text: 'Investment Banking', href: '/investment-banking' },
			{
				id: 5,
				text: 'Depositary &amp;&nbsp;Registrar',
				href: '/depositary-services',
			},
		],
	},
	{
		id: 2,
		title: 'About us',

		column: [
			{ id: 1, text: 'General Information', href: '#' },
			{ id: 2, text: 'Career', href: '/careers-at-armbrock' },
		],
	},
	{
		id: 3,
		title: 'Investor relations',
		column: [],
	},
	{
		id: 4,
		title: 'Media',
		column: [
			{ id: 1, text: 'Articles', href: '#' },
			{ id: 2, text: 'Investment Ideas', href: '#' },
			{ id: 3, text: 'Company News', href: '#' },
		],
	},
	{
		id: 5,
		title: 'Regulation',
		column: [
			{ id: 1, text: 'Laws &amp;&nbsp;Legal Acts', href: '#' },
			{ id: 2, text: 'Internal Rules', href: '#' },
			{ id: 3, text: 'Stock Exchange and Central Depositary Rules', href: '#' },
		],
	},
	{
		id: 6,
		title: 'Contact Us',
		column: [],
	},
];
