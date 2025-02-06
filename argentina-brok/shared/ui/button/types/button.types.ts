import type { PropsWithChildren } from 'react';

interface BaseButtonProps extends PropsWithChildren {
	className?: string;
	variant?: 'back' | 'outline' | 'filled' | 'subtle';
}

type LinkButtonProps = BaseButtonProps & {
	href: string;
	onClick?: never;
	type?: never;
};

type ClickButtonProps = BaseButtonProps & {
	onClick: () => void;
	type?: 'button' | 'submit' | 'reset';
	href?: never;
};

export type ButtonProps = LinkButtonProps | ClickButtonProps;
