import { LoadScript } from '@react-google-maps/api';
import cx from 'clsx';

import css from './index.module.css';

type GMapProps = {
	className?: string;
};

export const GMap = ({ className }: GMapProps) => {
	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	return (
		<address className={cx(css.root, className)}>
			<LoadScript
				googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY ?? ''}
			>
				<iframe
					width={containerStyle.width}
					height={containerStyle.height}
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.6789012345!2d44.512541615!3d40.1761851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc5d8d688661%3A0xfabbc06d3f1d219e!2sArmbrok%20Investment%20Company!5e0!3m2!1sen!2sge!4v1698765432100"
				></iframe>
			</LoadScript>
		</address>
	);
};
