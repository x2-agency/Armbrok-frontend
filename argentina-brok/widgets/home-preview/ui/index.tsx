/* eslint-disable @next/next/no-img-element */
import parser from 'html-react-parser';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import useMediaQuery from '@/shared/hooks/use-media-query';
import { headerScrollObserver } from '@/shared/lib/header-scroll-observer';
import type { HeroSection } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { useVideoBackground } from '@/widgets/app-layout/hooks/use-video-background';

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
	const { toggleAccountModalOpen, setSubjectForm } = useLayoutContext();

	const { videoRef, videoError, handleVideoLoaded, setVideoError } =
		useVideoBackground(
			{
				video: video?.url,
				poster: poster?.url,
				mobileVideo: mobileVideo?.url,
				mobilePoster: mobilePoster?.url,
			},
			isMobile
		);

	const handleClick = () => {
		setSubjectForm(button?.text ?? 'Open an account');
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
						preload="none"
						className={css.video}
						onError={() => setVideoError(true)}
						onLoadedData={handleVideoLoaded}
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
				{button && (
					<Button
						variant="filled"
						category="big"
						className={css.button}
						{...(button?.link
							? { href: button.link }
							: { onClick: handleClick })}
					>
						{button?.text ?? ''}
					</Button>
				)}
			</Container>
		</div>
	);
};
