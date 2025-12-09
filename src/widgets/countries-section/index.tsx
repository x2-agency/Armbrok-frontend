import cx from 'clsx';
import parser from 'html-react-parser';

import type { ResidenceCountriesSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { CountryItem } from './ui/country-item';

export type CountriesSectionProps = {
	residenceCountriesSection?: ResidenceCountriesSectionProps;
	className?: string;
};

export const CountriesSection = ({
																	 residenceCountriesSection,
																	 className,
																 }: CountriesSectionProps) => {
	const { title, additionalText, countries } = residenceCountriesSection ?? {};

	if (!countries || countries.length === 0) {
		return null;
	}

	const chunkSize = 8;
	const countryGroups = [];

	for (let i = 0; i < countries.length; i += chunkSize) {
		countryGroups.push(countries.slice(i, i + chunkSize));
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}

			{countryGroups.map((group, groupIndex) => (
				<ul
					key={groupIndex}
					className={cx(css.countries, {
						[css.centeredGroup]: group.length < chunkSize,
					})}
				>
					{group.map((country, index) => (
						<li key={`${groupIndex}-${index}`} className={css.countryItem}>
							<CountryItem name={country.name} flag={country.flag} />
						</li>
					))}
				</ul>
			))}

			{additionalText && <p className={css.others}>{parser(additionalText)}</p>}
		</Container>
	);
};
