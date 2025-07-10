import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { FormatImage } from '@/shared/ui/format-image';
import type { AssetManagementCardProps } from '@/view/home/types/response';

import css from './index.module.css';
import { ASSET_MANAGEMENT_IMAGES } from './model/asset-management.constants';

export type AssetManagmentProps = {
	data?: AssetManagementCardProps;
	className?: string;
};

export const AssetManagment = ({ data, className }: AssetManagmentProps) => {
	const { title, description, button, link } = data ?? {};
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

	return (
		<Container className={cx(css.root, className)}>
			<article className={cx(css.wrap, 'hybrid')}>
				<FormatImage
					poster={ASSET_MANAGEMENT_IMAGES}
					className={css.background}
					isLazy={false}
				/>
				<div className={css.contnet}>
					<h2 className={css.title}>{parser(title ?? '')}</h2>
					{description && (
						<p className={css.description}>{parser(description ?? '')}</p>
					)}
					{button && (
						<Button
							className={css.button}
							category="big"
							variant="filled"
							{...(button.link
								? { href: button.link }
								: {
										onClick: () =>
											handleClick(button?.text ?? 'Open an account'),
									})}
						>
							{parser(button?.text ?? '')}
						</Button>
					)}
				</div>
			</article>
			<Link className={css.link} href={link ?? ''} />
		</Container>
	);
};
