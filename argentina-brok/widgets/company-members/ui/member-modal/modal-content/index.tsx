import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

type ModalContentProps = {
	title: string;
	content?: string;
	className?: string;
};

export const ModalContent = ({
	title,
	content,
	className,
}: ModalContentProps) => {
	if (!content) {
		return null;
	}

	return (
		<article className={cx(css.root, className)}>
			<h4 className={css.title}>{parser(title)}</h4>
			<div className={css.content}>{parser(content)}</div>
		</article>
	);
};
