"use client";

import cx from "clsx";
import { useRouter } from "next/navigation";

import type { BackButtonProps } from "@/widgets/banner/banner.types";

import css from "./index.module.css";

export const BackButton = ({ children, className }: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={cx(css.root, className)} onClick={handleClick}>
      {children}
    </button>
  );
};
