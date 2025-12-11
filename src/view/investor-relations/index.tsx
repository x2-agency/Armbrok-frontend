'use client';

import type { NextPage } from 'next';

import { useUpdateFooterData } from '@/shared/hooks/use-update-footer-data';
import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CorporateReporting } from '@/widgets/corporate-reporting';
import { CountriesSection } from '@/widgets/countries-section';
import { DividendHistorySection } from '@/widgets/divident-history-section';
import { Shareholders } from '@/widgets/shareholders';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { InvestorRelationsPageResponse } from './types/response';
import { Disclaimer } from './ui/disclaimer';

export const InvestorRelations: NextPage<
	InvestorRelationsPageResponse['data']
> = ({
	publishedAt,
	heroSection,
	transparencySection,
	residenceCountries,
	shareholdersMeetingsSection,
	dividendPolicySection,
	dividendHistorySection,
	disclaimer,
	remunerationSection,
	shareholdersSection,
	documentTabsSection,
}) => {
	useUpdateFooterData(publishedAt);

	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: { ...heroSection?.button },
					poster: heroSection?.background,
				}}
				alignContent="center"
			/>
			<HeroContainer className={css.hero}>
				<TitleSection
					title={transparencySection?.title ?? ''}
					description={transparencySection?.description}
				/>
			</HeroContainer>
			<Shareholders {...shareholdersSection} />

			<DividendHistorySection data={dividendHistorySection} />

			<CountriesSection residenceCountriesSection={residenceCountries} />
			{documentTabsSection && <CorporateReporting {...documentTabsSection} />}
			<StatutoryDocuments
				documentsSection={shareholdersMeetingsSection}
				columns={2}
				fileDirection="row"
			/>
			<TitleSection
				className={css.dividend}
				title={dividendPolicySection?.title ?? ''}
				description={dividendPolicySection?.description}
			/>
			<StatutoryDocuments columns={2} documentsSection={remunerationSection} />
			<Disclaimer
				title={disclaimer?.title}
				description={disclaimer?.description}
			/>
		</>
	);
};
