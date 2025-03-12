import type { MediaData } from './global.types';

export type PosterImageProps = {
	desktop?: MediaData;
	tablet?: MediaData;
	mobile?: MediaData;
};

export type VideoProps = {
	poster: MediaData;
	mobilePoster: MediaData;
	video: { url: string };
	mobileVideo: { url: string };
};
