import type {DividerVariantProps} from "@vhsys-ui/theme";
import type {HTMLVhsysUIProps, PropGetter} from "@vhsys-ui/system-rsc";

import {divider} from "@vhsys-ui/theme";
import {Ref, useCallback, useMemo} from "react";

import {SeparatorProps as AriaSeparatorProps, useSeparator} from "./use-separator";

interface Props extends HTMLVhsysUIProps<"hr"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement> | undefined;
}

export type UseDividerProps = Props & DividerVariantProps & Omit<AriaSeparatorProps, "elementType">;

export function useDivider(props: UseDividerProps) {
  const {as, className, orientation, ...otherProps} = props;

  let Component = as || "hr";

  if (Component === "hr" && orientation === "vertical") {
    Component = "div";
  }

  const {separatorProps} = useSeparator({
    elementType: typeof Component === "string" ? Component : "hr",
    orientation,
  });

  const styles = useMemo(
    () =>
      divider({
        orientation,
        className,
      }),
    [orientation, className],
  );

  const getDividerProps: PropGetter = useCallback(
    (props = {}) => ({
      className: styles,
      role: "separator",
      "data-orientation": orientation,
      ...separatorProps,
      ...otherProps,
      ...props,
    }),
    [styles, orientation, separatorProps, otherProps],
  );

  return {Component, getDividerProps};
}

export type UseDividerReturn = ReturnType<typeof useDivider>;
