import { Container } from '@/shared/ui/container';
import type { InterviewProps } from '@/view/home/types/response';

import css from './index.module.css';
import { TextBlock } from './ui/text-block';
import { VideoBlock } from './ui/video-block';

export type InteractiveVideoProps = {
	data?: InterviewProps;
};

export const InteractiveVideo = ({ data = {} }: InteractiveVideoProps) => {
	return (
		<Container className={css.root}>
			<TextBlock data={data} />
			<VideoBlock data={data} />
		</Container>
	);
};
