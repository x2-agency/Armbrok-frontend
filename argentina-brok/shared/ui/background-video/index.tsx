import { useEffect, useRef } from 'react';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type { BackgroundVideoType } from '@/shared/types/global.types';
import type { PosterImageProps } from '@/shared/types/poster';
import { FormatImage } from '@/shared/ui/format-image';

import css from './index.module.css';

export const BackgroundVideo = ({
	poster,
	mobilePoster,
	video,
	mobileVideo,
	defaultPoster,
}: BackgroundVideoType & { defaultPoster?: PosterImageProps }) => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const videoCurrent = videoRef.current;
		if (videoCurrent) {
			videoCurrent.poster = isMobile
				? (mobilePoster?.url ?? '')
				: (poster?.url ?? '');
		}
	}, [isMobile, poster, mobilePoster, video, mobileVideo]);

	return (
		<div className={css.root}>
			{video || mobileVideo ? (
				<video
					preload="auto"
					ref={videoRef}
					autoPlay
					loop
					playsInline
					muted
					className={css.video}
					poster={isMobile ? mobilePoster?.url : poster?.url}
				>
					<source
						src={isMobile ? (mobileVideo?.url ?? '') : (video?.url ?? '')}
						type="video/mp4"
					/>
				</video>
			) : (
				<FormatImage poster={defaultPoster} className={css.poster} />
			)}
			{(video || mobileVideo) && <div className={css.overlay} />}
		</div>
	);
};
