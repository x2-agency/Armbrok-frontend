declare module 'react-google-recaptcha' {
	import * as React from 'react';

	export interface ReCAPTCHAProps {
		sitekey: string;
		onChange?: (token: string | null) => void;
		onExpired?: () => void;
		onErrored?: () => void;
		size?: 'compact' | 'normal' | 'invisible';
		theme?: 'light' | 'dark';
		tabindex?: number;
	}

	export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}
}
