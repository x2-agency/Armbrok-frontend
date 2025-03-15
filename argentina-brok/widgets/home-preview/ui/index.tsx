/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import useMediaQuery from '@/shared/hooks/use-media-query';
import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';
import type { HeroSection } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import css from './index.module.css';

export type HomePreviewProps = {
	heroSection?: HeroSection;
};

export const HomePreview = ({ heroSection }: HomePreviewProps) => {
	const { video, poster, mobilePoster, mobileVideo } =
		heroSection?.backgroundVideo ?? {};
	const { title, description, button } = heroSection ?? {};
	const isMobile = useMediaQuery('(max-width: 767px)');
	const { ref: relationsRef } = headerScrollObserver.useObserve('white');
	const [videoError, setVideoError] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.poster = isMobile
				? (mobilePoster?.url ?? '')
				: (poster?.url ?? '');
			videoRef.current.src = isMobile
				? (mobileVideo?.url ?? '')
				: (video?.url ?? '');
		}
	}, [isMobile, poster, mobilePoster, video, mobileVideo]);

	const handleClick = () => {
		setSubjectForm(button?.text ?? 'Open account');
		toggleAccountModalOpen(true);
	};

	return (
		<div
			ref={relationsRef as React.RefObject<HTMLDivElement>}
			className={css.wrap}
		>
			<div className={css.videoWrap}>
				{!videoError ? (
					<video
						ref={videoRef}
						autoPlay
						loop
						playsInline
						muted
						className={css.video}
						onError={() => setVideoError(true)}
					/>
				) : (
					<img
						alt="armbrok"
						loading="eager"
						src={poster?.url}
						className={css.video}
					/>
				)}
				<div className={css.overlay} />
			</div>
			<Container className={css.textWrap}>
				{parser(title ?? '')}
				<p className={css.description}>{parser(description ?? '')}</p>
				<Button
					variant="filled"
					category="big"
					className={css.button}
					onClick={handleClick}
				>
					{button?.text ?? ''}
				</Button>
			</Container>
		</div>
	);
};
