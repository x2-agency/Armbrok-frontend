import { Button } from "@/shared/ui/button";
import type { BannerBodyProps } from "@/widgets/banner/banner.types";
import { BannerPanel } from "@/widgets/banner/ui/banner-panel";

export const BannerBody = ({ awards, panel, button }: BannerBodyProps) => {
  if (awards) {
    return;
  }

  if (panel) {
    return <BannerPanel />;
  }

  if (button) {
    return <Button href={button?.href}>{button?.text}</Button>;
  }

  return null;
};
