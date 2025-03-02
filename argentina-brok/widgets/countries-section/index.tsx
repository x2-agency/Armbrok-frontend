import cx from 'clsx';
import parser from 'html-react-parser';

import type { ResidenceCountriesSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { CountryItem } from './ui/country-item';
export type CountriesSectionprops = {
	residenceCountriesSection?: ResidenceCountriesSectionProps;
	className?: string;
};

export const CountriesSection = ({
	residenceCountriesSection,
	className,
}: CountriesSectionprops) => {
	const { title, additionalText, countries } = residenceCountriesSection ?? {};
	if (!countries || countries.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.countries}>
				{countries.map((country, index) => (
					<li key={index}>
						<CountryItem name={country.name} flag={country.flag} />
					</li>
				))}
			</ul>
			{additionalText && <p className={css.others}>{parser(additionalText)}</p>}
		</Container>
	);
};
