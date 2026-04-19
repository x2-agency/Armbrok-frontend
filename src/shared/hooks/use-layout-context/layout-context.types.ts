import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import type { GetContactFormFieldsType } from '@/shared/api/get-contact-form-fields';
import type { SiteLinksData } from '@/shared/api/get-site-links';

export type LayoutContextType = {
	isAccountModalOpen: boolean;
	subjectForm: string;

	setSubjectForm: Dispatch<SetStateAction<string>>;
	toggleAccountModalOpen: Dispatch<SetStateAction<boolean>>;
	toggleMenuOpen: Dispatch<SetStateAction<boolean>>;
	isMenuOpen: boolean;
	footerData: {
		publishedAt: string | null;
	};
	setFooterData: (data: { publishedAt: string | null }) => void;
	isSearchModalOpen: boolean;
	toggleSearchModalOpen: Dispatch<SetStateAction<boolean>>;
	privacyPolicyText?: string;
	siteLinks?: SiteLinksData;
};

export type LayoutProviderProps = PropsWithChildren & {
	contactUsFormFields?: GetContactFormFieldsType;
	siteLinks?: SiteLinksData;
};
