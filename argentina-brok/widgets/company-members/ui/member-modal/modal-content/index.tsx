import cx from 'clsx';
import parser from 'html-react-parser';

import css from './index.module.css';

type ModalContentProps = {
	content?: string;
	className?: string;
};

export const ModalContent = ({ content, className }: ModalContentProps) => {
	if (!content) {
		return null;
	}

	return (
		<article className={cx(css.root, className)}>
			<div className={css.content}>{parser(content)}</div>
		</article>
	);
};
