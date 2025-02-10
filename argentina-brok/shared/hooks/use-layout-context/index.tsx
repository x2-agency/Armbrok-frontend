'use client';

import type {
	Dispatch,
	SetStateAction,
	PropsWithChildren,
	MutableRefObject,
} from 'react';
import { createContext, useContext, useState, useRef } from 'react';

type LayoutContextType = {
	toggleMenuOpen: Dispatch<SetStateAction<boolean>>;
	isMenuOpen: boolean;
	menuRef: MutableRefObject<HTMLDialogElement | null>;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDialogElement | null>(null);

	return (
		<LayoutContext.Provider
			value={{
				isMenuOpen,
				toggleMenuOpen,
				menuRef,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error();
	}
	return context;
};
