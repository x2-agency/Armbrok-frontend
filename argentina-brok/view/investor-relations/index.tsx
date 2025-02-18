import type { NextPage } from 'next';

import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CountriesSection } from '@/widgets/countries-section';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { InvestorRelationsPageResponse } from './types/response';

export const InvestorRelations: NextPage<
	InvestorRelationsPageResponse['data']
> = ({
	heroSection,
	transparencySection,
	residenceCountries,
	shareholdersMeetingsSection,
	dividendPolicySection,
}) => {
	return (
		<>
			<BannerSection
				type="default"
				banner={{
					title: heroSection?.title ?? '',
					description: heroSection?.description ?? '',
					button: heroSection?.button,
					poster: heroSection?.background,
				}}
				alignContent="center"
			/>
			<HeroContainer>
				<TitleSection
					title={transparencySection?.title ?? ''}
					description={transparencySection?.description}
				/>
			</HeroContainer>
			<CountriesSection
				title={residenceCountries?.title}
				countries={residenceCountries?.countries}
				additionalText={residenceCountries?.additionalText}
			/>
			<StatutoryDocuments
				title={shareholdersMeetingsSection?.title}
				columns={2}
				fileDirection="row"
				documents={shareholdersMeetingsSection?.documents}
			/>
			<TitleSection
				className={css.dividend}
				title={dividendPolicySection?.title ?? ''}
				description={dividendPolicySection?.description}
			/>
		</>
	);
};
