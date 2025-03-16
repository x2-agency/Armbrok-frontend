/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import type { ContactCardItem } from '@/shared/types/global.types';

import css from './index.module.css';

export const ContactCard = ({
	icon,
	title,
	description,
	contacts,
}: ContactCardItem) => {
	return (
		<article className={css.root}>
			<div className={css.contentWrap}>
				<div className={css.iconWrapper}>
					{icon && <img src={icon?.url} className={css.icon} />}
				</div>
				<div className={css.textWrap}>
					{title && <h4 className={css.title}>{parser(title)}</h4>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</div>
			</div>
			{contacts?.length && (
				<ul className={css.contacts}>
					{contacts.map((contact, index) => (
						<li className={css.contact} key={index}>
							<Link
								href={contact.link ? contact.link : `${contact.text}`}
								target={contact.link ? '_blank' : '_self'}
							>
								{parser(contact.text ?? '')}
							</Link>
						</li>
					))}
				</ul>
			)}
		</article>
	);
};
