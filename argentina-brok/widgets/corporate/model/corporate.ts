export interface CardType {
	icon: string;
	description: string;
	href: string;
}

export const CORPORATE_TITLE = 'For Corporate Clients';
export const CORPORATE_DESCRIPTION =
	'Tailored Financial Solutions to&nbsp;Drive Your<br/> Capital Market Success.';

export const CARDS: Array<CardType> = [
	{
		icon: '/assets/icons/type_icon_12.svg',
		description: 'Investment Banking',
		href: '#',
	},
	{
		icon: '/assets/icons/type_icon_01.svg',
		description: 'Depositary and Registrar',
		href: '#',
	},
];
