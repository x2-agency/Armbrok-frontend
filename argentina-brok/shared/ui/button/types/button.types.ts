import type { Dispatch, PropsWithChildren } from 'react';

interface BaseButtonProps extends PropsWithChildren {
	className?: string;
	variant?: 'back' | 'outline' | 'filled' | 'subtle' | 'next';
	iconRotate?: number;
	category?: 'default' | 'big';
	download?: string;
}

type LinkButtonProps = BaseButtonProps & {
	text?: string;
	href: string;
	onClick?: never;
	type?: never;
	disabled?: never;
	target?: '_self' | '_blank';
};

type ClickButtonProps = BaseButtonProps & {
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	href?: never;
	setLoadMore?: Dispatch<undefined | boolean>;
	isFetching?: boolean;
	isHasMore?: boolean;
	target?: never;
};

export type ButtonProps = LinkButtonProps | ClickButtonProps;
