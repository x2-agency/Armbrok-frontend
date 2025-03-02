import type { ContactCardItem } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { ContactCard } from './ui';

type ContactCardsSectionProps = {
	contacts?: Array<ContactCardItem>;
};

export const ContactCardsSection = ({ contacts }: ContactCardsSectionProps) => {
	if (!contacts || contacts.length === 0) {
		return null;
	}

	return (
		<Container className={css.root}>
			<ul className={css.list}>
				{contacts.map((contact, index) => (
					<li key={index} className={css.listItem}>
						<ContactCard {...contact} />
					</li>
				))}
			</ul>
		</Container>
	);
};
