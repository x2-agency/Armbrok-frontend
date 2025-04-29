import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

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
			<p className={css.leftPart}>
				{typeof leftPart === 'number' ? leftPart : parser(leftPart)}
			</p>
			<span className={css.dotted} />
			<p className={css.rightPart}>
				{typeof rightPart === 'number' ? rightPart : parser(rightPart)}
			</p>
			<div className={css.overlay} />
			{link && <Link href={link} target="_blank" className={css.link} />}
		</article>
	);
};
