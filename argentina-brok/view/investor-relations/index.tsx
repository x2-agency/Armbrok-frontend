import type { NextPage } from 'next';

import { HeroContainer } from '@/shared/ui/hero-container';
import { TitleSection } from '@/shared/ui/title-section';
import { BannerSection } from '@/widgets/banner-section/ui';
import { CountriesSection } from '@/widgets/countries-section';
import { Shareholders } from '@/widgets/shareholders';
import { StatutoryDocuments } from '@/widgets/statutory-documents';

import css from './index.module.css';
import type { InvestorRelationsPageResponse } from './types/response';
import { Disclaimer } from './ui/disclaimer';

export const InvestorRelations: NextPage<
	InvestorRelationsPageResponse['data']
> = ({
	heroSection,
	transparencySection,
	residenceCountries,
	shareholdersMeetingsSection,
	dividendPolicySection,
	disclaimer,
	remunerationSection,
	shareholdersSection,
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
			<Shareholders {...shareholdersSection} />
			<CountriesSection residenceCountriesSection={residenceCountries} />
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
			<StatutoryDocuments columns={1} documentsSection={remunerationSection} />
			<Disclaimer disclaimerMarkup={disclaimer} />
		</>
	);
};
