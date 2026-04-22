'use client';

import parser from 'html-react-parser';

import type { RunningTextSectionProps } from '@/shared/types/global.types';

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
		<section className={css.root}>
			<h2 className={css.serve}>
				{parser(runningTextSection?.staticText ?? '')}&nbsp;
			</h2>
			<AnimatedText
				className={css.animationText}
				textArray={runningTextSection?.textArray || []}
				interval={interval}
			/>
		</section>
	);
};

export default RunningTextSection;
