import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import cx from 'clsx';
import HTMLReactParser from 'html-react-parser/lib/index';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
	GOOGLE_MAP_CONTAINER_STYLE,
	GOOGLE_MAP_MARKER_POSITION,
	GOOGLE_MAP_STYLES_SETTING,
	GOOGLE_MAPS_LINK,
	INFO_WINDOW_DATA,
} from '@/features/contact-form/model/google-map.constants';

import css from './index.module.css';

type GMapProps = {
	className?: string;
};

export const GMap = ({ className }: GMapProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations('openInGoogleMaps');

	return (
		<address className={cx(css.root, className)}>
			<LoadScript
				googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ''}
			>
				<GoogleMap
					mapContainerStyle={GOOGLE_MAP_CONTAINER_STYLE}
					center={GOOGLE_MAP_MARKER_POSITION}
					zoom={19}
					options={{
						styles: GOOGLE_MAP_STYLES_SETTING,
						disableDefaultUI: true,
					}}
				>
					<Marker
						position={GOOGLE_MAP_MARKER_POSITION}
						onClick={() => setIsOpen(true)}
					>
						{isOpen && (
							<InfoWindow
								onCloseClick={() => setIsOpen(false)}
								options={{ headerContent: 'Armbrok Investment Company' }}
							>
								<div className={css.infoWindow}>
									<div>{HTMLReactParser(INFO_WINDOW_DATA.company)}</div>
									<div>{HTMLReactParser(INFO_WINDOW_DATA.address)}</div>
									<Link
										href={GOOGLE_MAPS_LINK}
										target="_blank"
										rel="noreferrer"
										className={css.link}
									>
										{HTMLReactParser(t('title'))}
									</Link>
								</div>
							</InfoWindow>
						)}
					</Marker>
				</GoogleMap>
			</LoadScript>
		</address>
	);
};
