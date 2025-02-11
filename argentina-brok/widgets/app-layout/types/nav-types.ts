export type LinksTypes = Record<'text' | 'href', string>;

export interface NavigationProps {
	navLinks: Array<LinksTypes>;
	className?: string;
}
