'use client';

import parser from 'html-react-parser';

import type { RunningTextSectionProps } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import { AnimatedText } from './ui/animation-text';

export type AnimationTextProps = {
	runningTextSection?: RunningTextSectionProps;
	interval: number;
};

const RunningTextSection = ({
	runningTextSection,
	interval,
}: AnimationTextProps) => {
	return (
		<Container className={css.root}>
			<h2 className={css.serve}>
				{parser(runningTextSection?.staticText ?? '')}&nbsp;
			</h2>
			<AnimatedText
				className={css.animationText}
				textArray={runningTextSection?.textArray || []}
				interval={interval}
			/>
		</Container>
	);
};

export default RunningTextSection;
