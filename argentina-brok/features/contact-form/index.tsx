import type { ContactForm } from '@/shared/types/global.types';

import css from './index.module.css';
import { Form } from './ui/form';
import { GMap } from './ui/gmap';

export const ContactFormSection = (
	props: ContactForm & { latitude?: string; longitude?: string }
) => {
	// const lat = parseFloat(props.latitude ?? '0');
	// const lng = parseFloat(props.longitude ?? '0');

	return (
		<section className={css.root}>
			<Form {...props} className={css.form} />
			<GMap />
		</section>
	);
};
