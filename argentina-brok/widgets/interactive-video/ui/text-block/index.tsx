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
	const { toggleAccountModalOpen } = useLayoutContext();

	return (
		<article className={cx(css.root)}>
			<h2 className={css.title}>{parser(title ?? '')}</h2>
			<p className={css.description}>{parser(description ?? '')}</p>
			<div className={css.wrapButton}>
				<Button
					onClick={() => toggleAccountModalOpen(true)}
					category="big"
					variant="filled"
					className={css.button}
				>
					{parser(primaryButton?.text ?? '')}
				</Button>
				<Button
					className={css.buttonRed}
					href={primaryButton?.link ?? ''}
					category="big"
					variant="outline"
				>
					{parser(secondaryButton?.text ?? '')}
				</Button>
			</div>
		</article>
	);
};
