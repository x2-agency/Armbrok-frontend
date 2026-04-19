'use client';

import { createContext, useContext, useState } from 'react';

import type {
	LayoutContextType,
	LayoutProviderProps,
} from './layout-context.types';

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({
	children,
	contactUsFormFields,
	siteLinks,
}: LayoutProviderProps) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);
	const [isSearchModalOpen, toggleSearchModalOpen] = useState<boolean>(false);
	const [isAccountModalOpen, toggleAccountModalOpen] = useState<boolean>(false);
	const [subjectForm, setSubjectForm] = useState<string>('');
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
				isSearchModalOpen,
				privacyPolicyText: contactUsFormFields?.data.privacyPolicyText,
				siteLinks,
				toggleSearchModalOpen,
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
