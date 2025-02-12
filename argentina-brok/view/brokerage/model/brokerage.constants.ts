import type { AppMobileSectionProps } from '@/widgets/app-mobile-section';

export const MOCK_DEFAULT_BANNER = {
	title: 'A&nbsp;Flexible Broker for Growing Your Investments',
	description:
		'Access to&nbsp;global exchanges and financial instruments &mdash;with high yields and strong protection',
	button: {
		text: 'Open account',
		href: '/account',
	},
	poster: {
		image: {
			src: '/assets/images/banner/brockage_banner.jpg',
			src2x: '/assets/images/banner/brockage_banner.jpg',
			mobile: '/assets/images/banner/banner-mob.jpg',
		},
	},
};

export const BROKERAGE_TEXT = 'We serve... Individuals|';

export const HELPFUL_INFORMATION = {
	title: 'Helpful information',
	items: [
		{
			title:
				'How can a&nbsp;non-resident of&nbsp;Armenia open an&nbsp;account?',
			description: 'Follow these steps to&nbsp;open a&nbsp;brokerage account:',
			articles: [
				'Contact Us: Reach out via email, phone, or&nbsp;online to&nbsp;get the application forms.',
				'Submit Documents: Provide a&nbsp;valid passport, proof of&nbsp;address, and other required documents.',
				'Complete and Return Forms: Fill out the application form and send it&nbsp;back to&nbsp;us.',
				'Account Activation: After our review, we&rsquo;ll provide your login details.',
				'Fund Your Account: Deposit funds through bank transfer.',
			],
			underDescription: 'Our team will assist you throughout the process.',
		},
		{
			title:
				'How can a&nbsp;non-resident of&nbsp;Armenia open an&nbsp;account?',
			description: 'Follow these steps to&nbsp;open a&nbsp;brokerage account:',
			articles: [
				'Contact Us: Reach out via email, phone, or&nbsp;online to&nbsp;get the application forms.',
				'Submit Documents: Provide a&nbsp;valid passport, proof of&nbsp;address, and other required documents.',
				'Complete and Return Forms: Fill out the application form and send it&nbsp;back to&nbsp;us.',
				'Account Activation: After our review, we&rsquo;ll provide your login details.',
				'Fund Your Account: Deposit funds through bank transfer.',
			],
			underDescription: 'Our team will assist you throughout the process.',
		},
		{
			title:
				'How can a&nbsp;non-resident of&nbsp;Armenia open an&nbsp;account?',
			description: 'Follow these steps to&nbsp;open a&nbsp;brokerage account:',
			articles: [
				'Contact Us: Reach out via email, phone, or&nbsp;online to&nbsp;get the application forms.',
				'Submit Documents: Provide a&nbsp;valid passport, proof of&nbsp;address, and other required documents.',
				'Complete and Return Forms: Fill out the application form and send it&nbsp;back to&nbsp;us.',
				'Account Activation: After our review, we&rsquo;ll provide your login details.',
				'Fund Your Account: Deposit funds through bank transfer.',
			],
			underDescription: 'Our team will assist you throughout the process.',
		},
		{
			title:
				'How can a&nbsp;non-resident of&nbsp;Armenia open an&nbsp;account?',
			description: 'Follow these steps to&nbsp;open a&nbsp;brokerage account:',
			articles: [
				'Contact Us: Reach out via email, phone, or&nbsp;online to&nbsp;get the application forms.',
				'Submit Documents: Provide a&nbsp;valid passport, proof of&nbsp;address, and other required documents.',
				'Complete and Return Forms: Fill out the application form and send it&nbsp;back to&nbsp;us.',
				'Account Activation: After our review, we&rsquo;ll provide your login details.',
				'Fund Your Account: Deposit funds through bank transfer.',
			],
			underDescription: 'Our team will assist you throughout the process.',
		},
	],
};

export const MOCK_MOBILE_APP_SECTION: AppMobileSectionProps = {
	title: 'Mobile App',
	description: 'Convenient, Powerful, Multilingual',
	topCards: {
		cards: [
			{
				title: 'Portfolio',
				description: 'View the cash balances across your brokerage account',
				mediaContent: { url: '/assets/images/iphone/iphone_15.png' },
			},
			{
				title: 'Market',
				description:
					'See the total value of all currency balances in your preferred currency',
				mediaContent: { url: '/assets/images/iphone/iphone_15_pro.png' },
			},
		],
	},
	bottomCards: {
		cards: [
			{
				title: 'Securities Portfolio',
				description: 'Access your holdings in&nbsp;the depository account',
				mediaContent: { url: '/assets/images/banner/banner-mob.jpg' },
			},
			{
				title: 'Portfolio Valuation',
				description:
					'Get an&nbsp;estimate of&nbsp;your portfolio&rsquo;s total value in&nbsp;the selected currency',
				mediaContent: { url: '/assets/images/banner/banner-mob.jpg' },
			},
			{
				title: 'Total Asset Overview',
				description:
					'Understand the combined value of&nbsp;all your assets&nbsp;&mdash; cash and securities',
				mediaContent: { url: '/assets/images/banner/banner-mob.jpg' },
			},
		],
	},
};
