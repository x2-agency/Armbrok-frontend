import cx from 'clsx';
import parser from 'html-react-parser';

import type { ResidenceCountriesSection } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { CountryItem } from './ui/country-item';

export const CountriesSection = ({
	title,
	countries,
	className,
	additionalText,
}: ResidenceCountriesSection & { className?: string }) => {
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
