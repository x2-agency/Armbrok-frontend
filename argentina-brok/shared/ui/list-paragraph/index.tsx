import cx from 'clsx';
import Link from 'next/link';

import { Detail } from '@/widgets/company-details-section/ui/detail';

import css from './index.module.css';

type ListParagraphProps = {
	leftPart: number | string;
	rightPart: number | string;
	className?: string;
	link?: string;
};

export const ListParagraph = ({
	leftPart,
	rightPart,
	className,
	link,
}: ListParagraphProps) => {
	return (
		<article className={cx(css.root, className, { [css.withLink]: link })}>
			<Detail
				title={typeof leftPart === 'number' ? leftPart.toString() : leftPart}
				description={
					typeof rightPart === 'number' ? rightPart.toString() : rightPart
				}
			/>
			<div className={css.overlay} />
			{link && <Link href={link} target="_blank" className={css.link} />}
		</article>
	);
};
