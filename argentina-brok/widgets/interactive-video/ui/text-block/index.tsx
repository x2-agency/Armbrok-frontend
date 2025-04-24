import cx from 'clsx';
import parser from 'html-react-parser';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import type { InterviewProps } from '@/view/home/types/response';

import css from './index.module.css';

export type TextBlockProps = {
	data: InterviewProps;
};

export const TextBlock = ({ data }: TextBlockProps) => {
	const { title, description, primaryButton, secondaryButton } = data;
	const { setSubjectForm, toggleAccountModalOpen } = useLayoutContext();

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

	return (
		<article className={cx(css.root)}>
			<h2 className={css.title}>{parser(title ?? '')}</h2>
			<p className={css.description}>{parser(description ?? '')}</p>
			<div className={css.wrapButton}>
				<Button
					onClick={() => handleClick(primaryButton?.text ?? 'Open an account')}
					category="big"
					variant="filled"
					className={css.button}
				>
					{parser(primaryButton?.text ?? '')}
				</Button>
				<Button
					className={css.buttonRed}
					onClick={() =>
						handleClick(secondaryButton?.text ?? 'Request a consultation')
					}
					category="big"
					variant="outline"
				>
					{parser(secondaryButton?.text ?? '')}
				</Button>
			</div>
		</article>
	);
};
