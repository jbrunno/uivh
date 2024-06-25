import type {ReactNode} from "react";
import type {GridSlots, GridVariantProps, SlotsToClasses} from "@vhsys-ui/theme";
import type {HTMLVhsysUIProps, PropGetter} from "@vhsys-ui/system-rsc";

import {grid} from "@vhsys-ui/theme";
import {mapPropsVariants} from "@vhsys-ui/system-rsc";
import {ReactRef} from "@vhsys-ui/react-utils";
import {useMemo} from "react";

interface Props extends HTMLVhsysUIProps<"div"> {
  container?: boolean;
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLSpanElement | null>;
  /**
   * The children of the grid.
   */
  children: ReactNode;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Grid classNames={{
   *    base:"base-classes", // wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<GridSlots>;
}

export type UseGridProps = Props & GridVariantProps;

export function useGrid(originalProps: UseGridProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, grid.variantKeys);

  const {as, children, classNames, ...otherProps} = props;

  const Component = as || "div";

  const slots = useMemo(
    () =>
      grid({
        ...variantProps,
      }),
    [...Object.values(variantProps)],
  );

  const getGridProps: PropGetter = () => {
    return {
      ...otherProps,
    };
  };

  return {
    Component,
    children,
    slots,
    classNames,
    getGridProps,
  };
}

export type UseGridReturn = ReturnType<typeof useGrid>;
