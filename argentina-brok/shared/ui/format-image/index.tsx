import cx from "clsx";

import type { PosterImageProps } from "@/shared/types/poster";

import css from "./index.module.css";

export const FormatImage = ({
  poster,
  className,
}: {
  poster: PosterImageProps;
  className?: string;
}) => {
  return (
    <picture className={cx(css.image, className)}>
      {poster?.avif?.mobile && (
        <source
          srcSet={`${poster?.avif?.mobile || poster?.avif?.src || poster?.avif?.src2x}`}
          media="(max-width: 767px)"
          type="image/avif"
        />
      )}
      {poster?.avif?.tablet && (
        <source
          srcSet={`${poster?.avif?.tablet || poster?.avif?.src || poster?.avif?.src2x}`}
          media="(max-width: 1024px)"
          type="image/avif"
        />
      )}
      {poster?.avif?.src && (
        <source
          srcSet={`${poster?.avif?.src || poster?.avif?.src2x} 1x, ${poster?.avif?.src2x || poster?.avif?.src} 2x `}
          type="image/avif"
        />
      )}
      {poster?.webp?.mobile && (
        <source
          srcSet={`${poster?.webp?.mobile || poster?.webp?.src || poster?.webp?.src2x}`}
          media="(max-width: 767px)"
          type="image/webp"
        />
      )}
      {poster?.webp?.tablet && (
        <source
          srcSet={`${poster?.webp?.tablet || poster?.webp?.src || poster?.webp?.src2x}`}
          media="(max-width: 1024px)"
          type="image/webp"
        />
      )}
      {poster?.webp?.src && (
        <source
          srcSet={`${poster?.webp?.src || poster?.webp?.src2x} 1x, ${poster?.webp?.src2x || poster?.webp?.src} 2x `}
          type="image/webp"
        />
      )}
      <source
        srcSet={`${poster?.image?.mobile || poster?.image?.src || poster?.image?.src2x}`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${poster?.image?.tablet || poster?.image?.src || poster?.image?.src2x}`}
        media="(max-width: 1024px)"
      />
      <source
        srcSet={`${poster?.image?.src || poster?.image?.src2x} 1x, ${poster?.image?.src2x || poster?.image?.src} 2x `}
      />
      <img
        src={`${poster?.image?.src || poster?.image?.src2x || poster?.image?.mobile}`}
        alt="block"
        loading="lazy"
      />
    </picture>
  );
};
