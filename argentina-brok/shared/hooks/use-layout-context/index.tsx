'use client';

import type {
	Dispatch,
	MutableRefObject,
	PropsWithChildren,
	SetStateAction,
} from 'react';
import { createContext, useContext, useRef, useState } from 'react';

type LayoutContextType = {
	isAccountModalOpen: boolean;
	toggleAccountModalOpen: Dispatch<SetStateAction<boolean>>;
	toggleMenuOpen: Dispatch<SetStateAction<boolean>>;
	isMenuOpen: boolean;
	menuRef: MutableRefObject<HTMLDialogElement | null>;
	footerData: {
		publishedAt: string | null;
	};
	setFooterData: (data: { publishedAt: string | null }) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);
	const [isAccountModalOpen, toggleAccountModalOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDialogElement | null>(null);

	const [footerData, setFooterData] = useState<{ publishedAt: string | null }>({
		publishedAt: null,
	});

	return (
		<LayoutContext.Provider
			value={{
				isAccountModalOpen,
				toggleAccountModalOpen,
				isMenuOpen,
				toggleMenuOpen,
				menuRef,
				footerData,
				setFooterData,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error('useLayoutContext must be used within a LayoutProvider');
	}
	return context;
};
