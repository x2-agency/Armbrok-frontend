'use client';

import { useEffect, useRef, useState } from 'react';

export const useVideoPlayer = (src: string, poster: string) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handlePlay = async () => {
		const video = videoRef.current;
		if (video) {
			try {
				video.currentTime = 0;
				await video.play();
				setIsPlaying(true);
				await video.requestFullscreen();
			} catch (error) {
				console.error('Error playing video:', error);
			}
		}
	};

	const handleFullScreenChange = () => {
		const video = videoRef.current;

		if (video && !document.fullscreenElement) {
			video.pause();
			video.load();
			setIsPlaying(false);
		}
	};

	useEffect(() => {
		document.addEventListener('fullscreenchange', handleFullScreenChange);
		return () => {
			document.removeEventListener('fullscreenchange', handleFullScreenChange);
		};
	}, []);

	return {
		videoRef,
		isPlaying,
		handlePlay,
		poster,
		src,
	};
};
