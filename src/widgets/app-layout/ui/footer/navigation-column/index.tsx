'use client';

import parser from 'html-react-parser';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { SocialLinks } from '@/widgets/app-layout/ui/footer/social-links';

import css from './index.module.css';

const resolveInnerHref = (slug: string | null) => {
	if (!slug) return undefined;
	if (slug.includes('@')) return `mailto:${slug}`;
	if (/^\+?[\d\s()-]+$/.test(slug) || slug.startsWith('+'))
		return `tel:${slug.replace(/\s+/g, '')}`;
	return `/${slug}`;
};

export const NavigationColumn = () => {
	const { siteLinks } = useLayoutContext();
	const footerGroups = siteLinks?.footer ?? [];

	return (
		<>
			<nav className={css.root}>
				{footerGroups.map(group => (
					<div key={group.id} className={css.column}>
						<Button
							variant="subtle"
							href={group.slug ? `/${group.slug}` : undefined}
							className={css.title}
						>
							{parser(group.text ?? '')}
						</Button>
						<ul className={css.list}>
							{(group.innerLinks ?? []).map(link => {
								const href =
									resolveInnerHref(link.slug) ??
									resolveInnerHref(link.text);
								return (
									<li key={link.id}>
										<Button
											variant="subtle"
											href={href}
											className={css.listItem}
										>
											{parser(link.text ?? '')}
										</Button>
									</li>
								);
							})}
						</ul>
					</div>
				))}
				<SocialLinks className={css.socialDesktop} />
			</nav>
			<SocialLinks className={css.socialMobile} />
		</>
	);
};
