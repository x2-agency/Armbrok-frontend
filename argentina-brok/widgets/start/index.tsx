import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import type { InvestingStepsSectionProps } from '@/view/home/types/response';

import css from './index.module.css';
import { CardsNumber } from './ui/cards-number';

export type StartProps = {
	data?: InvestingStepsSectionProps;
};

export const Start = ({ data }: StartProps) => {
	const { title, button, steps } = data ?? {};
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();

	if (!steps) {
		return null;
	}

	const handleClick = (subject: string) => {
		setSubjectForm(subject);
		toggleAccountModalOpen(true);
	};

	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{title}</h2>}

			<CardsNumber steps={steps} />
			{button && (
				<Button
					category="big"
					variant="filled"
					className={css.button}
					onClick={() => handleClick(button.text ?? 'Open an account')}
				>
					{button.text}
				</Button>
			)}
		</Container>
	);
};
