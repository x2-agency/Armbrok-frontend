import css from './index.module.css';

type ParagraphProps = {
	leftPart: string;
	rightPart: string | number;
};

export const Paragraph = ({ leftPart, rightPart }: ParagraphProps) => {
	return (
		<>
			<p className={css.leftPart}>{leftPart}</p>
			<span className={css.dotted} />
			<p className={css.rightPart}>{rightPart}</p>
		</>
	);
};
