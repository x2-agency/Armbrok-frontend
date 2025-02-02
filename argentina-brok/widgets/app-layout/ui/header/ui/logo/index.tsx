import cx from 'clsx';
import Link from 'next/link';

import type { LogoProps } from '@/widgets/app-layout/ui/header/types/logo-types';

import css from './index.module.css';

export const Logo = ({ className, href, logo }: LogoProps) => {
	return (
		<Link
			prefetch={false}
			href={href}
			className={cx(css.logoHeader, className)}
		>
			<img src={logo.src} alt={logo.alt} />
		</Link>
	);
};
