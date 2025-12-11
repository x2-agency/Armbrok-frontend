export const GOOGLE_MAP_STYLES_SETTING: Array<google.maps.MapTypeStyle> = [
	{
		elementType: 'geometry',
		stylers: [{ saturation: -100 }, { lightness: 20 }],
	},
	{
		featureType: 'poi',
		elementType: 'labels.icon',
		stylers: [{ visibility: 'off' }],
	},
	{
		featureType: 'poi',
		elementType: 'labels.text',
		stylers: [{ visibility: 'off' }],
	},
];

export const GOOGLE_MAP_MARKER_POSITION = { lat: 40.176162, lng: 44.514758 };

export const GOOGLE_MAP_CONTAINER_STYLE = { width: '100%', height: '100%' };

export const GOOGLE_MAPS_LINK =
	'https://maps.google.com/maps?ll=40.17622,44.514788&z=21&t=m&hl=ru-RU&gl=US&mapclient=apiv3&cid=18067245905569718686';

export const INFO_WINDOW_DATA = {
	company: 'Արմբրոկ Ներդրումային Ընկերություն',
	address: '39 Hanrapetutyan St, Yerevan 0010, Armenia',
};
