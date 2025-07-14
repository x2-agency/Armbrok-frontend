import cx from 'clsx';

import { Link } from '@/i18n/navigation';
import LogoSVG from '@/public/assets/icons/header/logo_armbrok.svg';
import type { LogoProps } from '@/widgets/app-layout/types/logo-types';

import css from './index.module.css';

export const Logo = ({ className, href, logo, isDark }: LogoProps) => {
	return (
		<Link
			prefetch={false}
			href={href}
			className={cx(css.logoHeader, className)}
		>
			<LogoSVG
				src={logo.src}
				className={cx(css.icon, { [css.dark]: isDark })}
			/>
		</Link>
	);
};
