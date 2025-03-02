import type { Dispatch, PropsWithChildren } from 'react';

interface BaseButtonProps extends PropsWithChildren {
	className?: string;
	variant?: 'back' | 'outline' | 'filled' | 'subtle' | 'next';
	iconRotate?: number;
	category?: 'default' | 'big';
}

type LinkButtonProps = BaseButtonProps & {
	text?: string;
	href: string;
	onClick?: never;
	type?: never;
	disabled?: never;
};

type ClickButtonProps = BaseButtonProps & {
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	href?: never;
	setLoadMore?: Dispatch<undefined | boolean>;
	isFetching?: boolean;
	isHasMore?: boolean;
};

export type ButtonProps = LinkButtonProps | ClickButtonProps;
