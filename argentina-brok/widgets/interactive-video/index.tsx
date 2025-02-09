import { Container } from '@/shared/ui/container';

import css from './index.module.css';
import type { InteractiveProps } from './model/interactive-video';
import { TextBlock } from './ui/text-block';
import { VideoBlock } from './ui/video-block';

export const InteractiveVideo = ({ data }: InteractiveProps) => {
	return (
		<Container className={css.root}>
			<TextBlock data={data} />
			<VideoBlock data={data} />
		</Container>
	);
};
