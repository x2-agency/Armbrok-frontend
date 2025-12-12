import type { Metadata } from 'next';

import type { SeoType } from '@/shared/types/global.types';

type GenerateTemplateMetadaParams = {
	seo?: SeoType;
};

export const generateTemplateMetadata = ({
	seo,
}: GenerateTemplateMetadaParams): Metadata => {
	if (seo) {
		return {
			metadataBase: process.env.NEXT_PUBLIC_WEBSITE_URL
				? new URL(process.env.NEXT_PUBLIC_WEBSITE_URL)
				: undefined,
			title: seo?.metaTitle,
			description: seo?.metaDescription,
			openGraph: {
				title: seo?.metaTitle,
				description: seo?.metaDescription,
				images: seo?.shareImage?.url ? [seo?.shareImage?.url] : [],
			},
		};
	}

	return {
		title: 'Armbrok | Invest in Armenia',
	};
};
