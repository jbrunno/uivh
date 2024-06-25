import type {TypographyVariantProps} from "@vhsys-ui/theme";

import {useDOMRef} from "@vhsys-ui/react-utils";
import {HTMLVhsysUIProps, PropGetter} from "@vhsys-ui/system";
import {typography} from "@vhsys-ui/theme";
import {Ref, useCallback, useMemo} from "react";

type TypographyElement = HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement;

interface Props<T extends TypographyElement = HTMLParagraphElement>
  extends HTMLVhsysUIProps<"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6">,
    TypographyVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<T>;
}

export type UseTypographyProps<T extends TypographyElement = HTMLParagraphElement> = Props<T> &
  TypographyVariantProps;

export function useTypography<T extends TypographyElement = HTMLParagraphElement>(
  originalProps: UseTypographyProps<T>,
) {
  const {ref, as, className, variant = "body1", color = "neutral", ...otherProps} = originalProps;

  let Component;

  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      Component = as || variant;
      break;
    case "subtitle1":
    case "subtitle2":
    case "body1":
    case "body2":
    case "buttonLarge":
    case "buttonMedium":
    case "buttonSmall":
    case "caption":
    case "overline":
      Component = as || "span";
      break;
    default:
      Component = as || "p";
      break;
  }

  const domRef = useDOMRef<T>(ref);

  const slots = useMemo(
    () =>
      typography({
        variant,
        color,
        className,
      }),
    [variant, color, className],
  );

  const getProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        ...props,
        ...otherProps,
        ref: domRef,
        className: slots[variant]({class: className}),
      };
    },
    [variant, otherProps, slots, className],
  );

  return {Component, getProps, variant};
}

export type UseTypographyReturn = ReturnType<typeof useTypography>;
