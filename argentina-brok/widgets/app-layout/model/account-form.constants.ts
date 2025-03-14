type InputData = {
	label: string;
	placeholder: string;
	required: boolean;
	errorMessage: string;
	type: 'text' | 'tel' | 'email';
};

type TextareaData = {
	label: string;
	placeholder: string;
	required: boolean;
	errorMessage: string;
};

type AccountData = {
	title: string;
	nameInput: InputData;
	telInput: InputData;
	emailInput: InputData;
	subjectInput: InputData;
	messageTextArea: TextareaData;
	captcha: {
		text: string;
	};
	checkbox: {
		label: string;
	};
	button: {
		text: string;
	};
};

export const ACCOUNT: AccountData = {
	title: 'Open account',
	nameInput: {
		label: 'Your name',
		placeholder: 'First name',
		required: true,
		errorMessage: 'Please fill this field',
		type: 'text',
	},
	subjectInput: {
		label: 'Subject',
		placeholder: 'Subject',
		required: true,
		errorMessage: 'Please fill this field',
		type: 'text',
	},
	telInput: {
		label: 'Your phone number',
		placeholder: 'Phone number',
		required: true,
		errorMessage: 'Please fill this field',
		type: 'tel',
	},
	emailInput: {
		label: 'Your e-mail address',
		placeholder: 'E-mail address',
		required: true,
		errorMessage: 'Please fill this field',
		type: 'email',
	},
	messageTextArea: {
		label: 'Message',
		placeholder: 'Leave us a message...',
		required: true,
		errorMessage: 'Please fill this field',
	},
	captcha: {
		text: 'This site is&nbsp;protected by&nbsp;reCAPTCHA, and the Google Privacy Policy<br /> and Terms of&nbsp;Service apply.',
	},
	checkbox: {
		label:
			'I&nbsp;hereby give my&nbsp;unconditional consent to&nbsp;the text of&nbsp;the public agreement &laquo;PERSONAL DATA PROTECTION POLICY&raquo; published on&nbsp;the official website of&nbsp;&laquo;ARMBROK OJSC&raquo;, in&nbsp;the &laquo;Internal Regulations&raquo; section, to&nbsp;the extent of&nbsp;data processing, which is&nbsp;necessary to&nbsp;use these services.',
	},
	button: {
		text: 'Get started',
	},
};

export const SUCCESS_FORM = {
	title: 'Thank You<br /> for Reaching Out!',
	description:
		'We&rsquo;ve received your message and will get back to&nbsp;you shortly.<br /> Our team is&nbsp;reviewing your inquiry and will contact you within 24&ndash;48&nbsp;hours.',
};
