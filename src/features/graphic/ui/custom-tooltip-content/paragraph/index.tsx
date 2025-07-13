import css from './index.module.css';

type ParagraphProps = {
	title: string;
	description: string | number;
};

export const Paragraph = ({ title, description }: ParagraphProps) => {
	return (
		<>
			<p className={css.leftPart}>{title}</p>
			<span className={css.dotted} />
			<p className={css.rightPart}>{description}</p>
		</>
	);
};
