'use client';

import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

import type { FundsStateData } from '@/shared/types/funds-state-data';

type LayoutContextType = {
	isAccountModalOpen: boolean;
	subjectForm: string;
	headerFundsDropdownItems: Array<FundsStateData> | null;
	setHeaderFundsDropDownItems: Dispatch<
		SetStateAction<Array<FundsStateData> | null>
	>;
	setSubjectForm: Dispatch<SetStateAction<string>>;
	toggleAccountModalOpen: Dispatch<SetStateAction<boolean>>;
	toggleMenuOpen: Dispatch<SetStateAction<boolean>>;
	isMenuOpen: boolean;
	footerData: {
		publishedAt: string | null;
	};
	setFooterData: (data: { publishedAt: string | null }) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);
	const [isAccountModalOpen, toggleAccountModalOpen] = useState<boolean>(false);
	const [subjectForm, setSubjectForm] = useState<string>('');
	const [headerFundsDropdownItems, setHeaderFundsDropDownItems] =
		useState<Array<FundsStateData> | null>(null);
	const [footerData, setFooterData] = useState<{ publishedAt: string | null }>({
		publishedAt: null,
	});

	return (
		<LayoutContext.Provider
			value={{
				subjectForm,
				isAccountModalOpen,
				isMenuOpen,
				footerData,
				headerFundsDropdownItems,
				setHeaderFundsDropDownItems,
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
