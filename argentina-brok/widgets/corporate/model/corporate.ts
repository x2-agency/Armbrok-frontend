export interface CardType {
	icon: string;
	description: string;
}

export interface CardsProp {
	card: Array<CardType>;
}

export const CARDS: Array<CardType> = [
	{ icon: '', description: 'Investment Banking' },
	{ icon: '', description: 'Depositary and Registrar' },
];
