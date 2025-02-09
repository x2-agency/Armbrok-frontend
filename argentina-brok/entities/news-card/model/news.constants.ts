import type { NewsSectionType } from '@/entities/news-card/types';

export const HOME_NEWS: NewsSectionType = {
	title: 'Current News &amp; <br/>Articles in&nbsp;Armbrock',
	moreButton: {
		text: 'More News and Articles',
		link: '/news',
	},
	news: [
		{
			id: 1,
			piblishDate: '01.11.2024',
			title:
				'Dividend shares of&nbsp;Russian companies: how to&nbsp;choose the best ones',
			description:
				'Dividend shares of&nbsp;Russian companies are a&nbsp;great opportunity to&nbsp;earn passive income in&nbsp;rubles without wasting time on&nbsp;daily trading. Unlike speculative trading, where profits depend on&nbsp;constant market fluctuations, divi',
			author: {
				avatar: '/assets/images/avatar.jpg',
				name: 'Aram Kaifaijan',
			},
			category: 'Company news',
		},
		{
			id: 2,
			piblishDate: '15.10.2024',
			title: 'Armbrok became the title sponsor of&nbsp;the Yerevan Marathon',
			description:
				'The Yerevan Marathon annually gathers thousands of&nbsp;people from Armenia and all over the world under its banners. This festival unites participants in&nbsp;their endeavour to&nbsp;reach new heights. The marathon offers&nbsp;ro...',
			author: {
				avatar: '/assets/images/avatar.jpg',
				name: 'Aram Kaifaijan',
			},
			category: 'Company news',
		},
		{
			id: 3,
			piblishDate: '12.10.2024',
			title:
				'First tier stocks: investing in&nbsp;the cream of&nbsp;the Russian market',
			description:
				'There are many instruments available to&nbsp;investors in&nbsp;the world of&nbsp;the stock market. It&nbsp;is&nbsp;important to&nbsp;choose those that will bring maximum profit at&nbsp;minimum risk. And this is&nbsp;where first-tier shares, also known as&nbsp;&quot;blue...',
			author: {
				avatar: '/assets/images/avatar.jpg',
				name: 'Aram Kaifaijan',
			},
			category: 'Company news',
		},
		// {
		// 	id: 4,
		// 	piblishDate: '15.10.2024',
		// 	title:
		// 		'First tier stocks: investing in&nbsp;the cream of&nbsp;the Russian market',
		// 	description:
		// 		'There are many instruments available to&nbsp;investors in&nbsp;the world of&nbsp;the stock market. It&nbsp;is&nbsp;important to&nbsp;choose those that will bring maximum profit at&nbsp;minimum risk. And this is&nbsp;where first-tier shares, also known as&nbsp;&quot;blue...',
		// 	author: {
		// 		avatar: '/assets/images/avatar.jpg',
		// 		name: 'Aram Kaifaijan',
		// 	},
		// 	category: 'Company news',
		// },
	],
};
