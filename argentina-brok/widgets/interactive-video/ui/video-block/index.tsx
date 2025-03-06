'use client';

import parser from 'html-react-parser';

import PlaySVG from '@/public/assets/icons/play.svg';
import { useVideoPlayer } from '@/shared/hooks/use-video-player';
import type { InterviewProps } from '@/view/home/types/response';

import css from './index.module.css';

export type VideoBlockProps = {
	data: InterviewProps;
};

export const VideoBlock = ({ data }: VideoBlockProps) => {
	const { videoCaption, video, videoPoster } = data;

	const videoUrl = video?.url;

	const { videoRef, isPlaying, handlePlay } = useVideoPlayer(videoUrl);

	const handleVideoClick = () => {
		if (!isPlaying) {
			handlePlay();
		}
	};

	return (
		<div className={css.root}>
			<div className={css.videoWrapper} onClick={handleVideoClick}>
				<video
					ref={videoRef}
					className={css.video}
					src={video?.url}
					poster={videoPoster?.url}
					controls={isPlaying}
				/>
				{!isPlaying && (
					<div className={css.wrapButton}>
						<button className={css.playButton} onClick={handlePlay}>
							<PlaySVG className={css.svg} />
						</button>
						<span className={css.description}>
							{parser(videoCaption ?? '')}
						</span>
					</div>
				)}
			</div>
		</div>
	);
};
