import cx from "clsx";

import type { BannerProps } from "@/widgets/banner/banner.types";

import { BannerBody } from "./banner-body";
import { BannerHead } from "./banner-head";
import css from "./index.module.css";

export const Banner = ({
  alignContent = "",
  size = "medium",
  banner,
}: BannerProps) => {
  return (
    <section className={cx(css.root, css[size], alignContent)}>
      <BannerHead
        title={banner.title}
        description={banner.description}
        size={size}
      />
      <BannerBody
        awards={banner.awards}
        panel={banner.panel}
        button={banner.button}
      />
    </section>
  );
};
