import type { ReactNode } from "react";

type BaseButtonProps = {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "default";
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ClickButtonProps = BaseButtonProps & {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  href?: never;
};

export type ButtonProps = LinkButtonProps | ClickButtonProps;
