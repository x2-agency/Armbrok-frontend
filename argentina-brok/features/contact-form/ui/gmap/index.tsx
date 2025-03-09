import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import cx from 'clsx';

import css from './index.module.css';

type GMapProps = {
	className?: string;
	lat: number;
	lng: number;
};

export const GMap = ({ className, lat, lng }: GMapProps) => {
	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	const center = {
		lat: lat,
		lng: lng,
	};

	return (
		<address className={cx(css.root, className)}>
			<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY ?? ''}>
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
					<Marker position={center} />
				</GoogleMap>
			</LoadScript>
		</address>
	);
};
