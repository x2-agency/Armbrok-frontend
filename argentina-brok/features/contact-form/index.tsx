import type { ContactForm } from '@/shared/types/global.types';

import css from './index.module.css';
import { Form } from './ui/form';
import { GMap } from './ui/gmap';

export const ContactFormSection = (props: ContactForm) => {
	return (
		<section className={css.root}>
			<Form {...props} className={css.form} />
			<GMap />
		</section>
	);
};
