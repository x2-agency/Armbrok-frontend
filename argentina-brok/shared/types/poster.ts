interface ImageProps {
  src?: string;
  src2x?: string;
  tablet?: string;
  mobile?: string;
}

export interface PosterImageProps {
  image?: ImageProps;
  webp?: ImageProps;
  avif?: ImageProps;
}
