export interface NavigationType {
	id: number;
	title: ItemType;
	column?: Array<ItemType>;
}

export interface ItemType {
	id?: number;
	text?: string;
	href?: string;
}

export const NAVIGATION_TABLE_DATA: Array<NavigationType> = [
	{
		id: 1,
		title: {
			text: 'Products&nbsp;and&nbsp;Services',
			href: '/depositary-services',
		},
		column: [
			{ id: 1, text: 'Brokerage', href: '/brokerage' },
			{ id: 2, text: 'Asset Management', href: '/asset-management' },
			{ id: 3, text: 'Investment Funds', href: '/funds' },
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
		title: {
			text: 'About us',
			href: '/about-us',
		},
		column: [
			{ id: 1, text: 'General Information', href: '#' },
			{ id: 2, text: 'Career', href: '/careers-at-armbrock' },
		],
	},
	{
		id: 3,
		title: {
			text: 'Investor relations',
			href: 'investor-relations',
		},
		column: [],
	},
	{
		id: 4,
		title: { text: 'Media', href: 'media' },
		column: [
			{
				id: 1,
				text: 'Articles',
				href: `/media?category=articles`,
			},
			{ id: 2, text: 'Investment Ideas', href: '/media?category=invest-ideas' },
			{ id: 3, text: 'Company News', href: '/media?category=company-news' },
		],
	},
	{
		id: 5,
		title: { text: 'Regulation', href: '/careers-at-armbrock' },
		column: [
			{
				id: 1,
				text: 'Laws &amp;&nbsp;Legal Acts',
				href: '/careers-at-armbrock',
			},
			{ id: 2, text: 'Internal Rules', href: '/careers-at-armbrock' },
			{
				id: 3,
				text: 'Stock Exchange and Central Depositary Rules',
				href: '/careers-at-armbrock',
			},
		],
	},
	{
		id: 6,
		title: { text: 'Contact us', href: '/armbrok-contact-page' },
		column: [],
	},
];
