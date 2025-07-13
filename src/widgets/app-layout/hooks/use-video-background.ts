'use client';

import { useEffect, useRef, useState } from 'react';

export const useVideoBackground = (
	sources: {
		video?: string;
		poster?: string;
		mobileVideo?: string;
		mobilePoster?: string;
	},
	isMobile: boolean
) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoError, setVideoError] = useState(false);
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		if (!videoRef.current) return;

		const videoSrc = isMobile ? sources.mobileVideo : sources.video;
		const posterSrc = isMobile ? sources.mobilePoster : sources.poster;

		if (videoRef.current.src !== videoSrc) {
			videoRef.current.poster = posterSrc ?? '';
			videoRef.current.src = videoSrc ?? '';
			videoRef.current.load();
		}
	}, [isMobile, sources]);

	const handleVideoLoaded = () => {
		setVideoLoaded(true);
		videoRef.current?.play().catch(e => {
			console.error('Autoplay failed:', e);
			setVideoError(true);
		});
	};

	return {
		videoRef,
		videoError,
		videoLoaded,
		handleVideoLoaded,
		setVideoError,
	};
};
