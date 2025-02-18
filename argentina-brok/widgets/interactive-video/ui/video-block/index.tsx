'use client';

import parser from 'html-react-parser';

import PlaySVG from '@/public/assets/icons/play.svg';
import { useVideoPlayer } from '@/shared/hooks/use-video-player';
import type { InteractiveProps } from '@/widgets/interactive-video/types/interactive-video';

import css from './index.module.css';

export const VideoBlock = ({ data }: InteractiveProps) => {
	const { src, poster, descriptionVideo } = data;
	const { videoRef, isPlaying, handlePlay } = useVideoPlayer(src, poster.src);

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
					src={src}
					poster={poster.src}
					controls={isPlaying}
				/>
				{!isPlaying && (
					<div className={css.wrapButton}>
						<button className={css.playButton} onClick={handlePlay}>
							<PlaySVG className={css.svg} />
						</button>
						<span className={css.description}>{parser(descriptionVideo)}</span>
					</div>
				)}
				<div className={css.overlay} />
			</div>
		</div>
	);
};
