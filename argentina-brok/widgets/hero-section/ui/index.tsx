import { Container } from '@/shared/ui/container';
import { TitleSection } from '@/shared/ui/title-section';

import css from './index.module.css';

type HeroSectionProps = {
	titleSection?: {
		title: string;
		description: string;
	};
};

export const HeroSection = ({ titleSection }: HeroSectionProps) => {
	return (
		<Container className={css.root}>
			{titleSection && (
				<TitleSection className={css.titleSection} {...titleSection} />
			)}
		</Container>
	);
};
