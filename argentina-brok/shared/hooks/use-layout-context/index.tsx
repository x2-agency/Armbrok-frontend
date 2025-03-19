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
	subjectForm: string;
	setSubjectForm: Dispatch<SetStateAction<string>>;
	toggleAccountModalOpen: Dispatch<SetStateAction<boolean>>;
	toggleMenuOpen: Dispatch<SetStateAction<boolean>>;
	headerPadding: number;
	setHeaderPadding: Dispatch<SetStateAction<number>>;
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
	const [subjectForm, setSubjectForm] = useState<string>('');
	const [headerPadding, setHeaderPadding] = useState<number>(0);

	const [footerData, setFooterData] = useState<{ publishedAt: string | null }>({
		publishedAt: null,
	});

	return (
		<LayoutContext.Provider
			value={{
				subjectForm,
				isAccountModalOpen,
				isMenuOpen,
				menuRef,
				footerData,
				headerPadding,
				setHeaderPadding,
				toggleAccountModalOpen,
				setSubjectForm,
				toggleMenuOpen,
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
