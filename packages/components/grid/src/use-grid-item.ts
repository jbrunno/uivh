import type {GridItemSlots, GridItemVariantProps, SlotsToClasses} from "@vhsys-ui/theme";
import type {ReactNode} from "react";
import type {HTMLVhsysUIProps, PropGetter} from "@vhsys-ui/system-rsc";

import {gridItem} from "@vhsys-ui/theme";
import {mapPropsVariants} from "@vhsys-ui/system-rsc";
import {ReactRef} from "@vhsys-ui/react-utils";
import {useMemo} from "react";

interface Props extends HTMLVhsysUIProps<"div"> {
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
   * <GridItem classNames={{
   *    base:"base-classes", // wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<GridItemSlots>;
}

export type UseGridItemProps = Props & GridItemVariantProps;

export function useGridItem(originalProps: UseGridItemProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, gridItem.variantKeys);

  const {as, children, classNames, ...otherProps} = props;

  const Component = as || "div";

  const slots = useMemo(
    () =>
      gridItem({
        ...variantProps,
      }),
    [...Object.values(variantProps)],
  );

  const getGridItemProps: PropGetter = () => {
    return {
      ...otherProps,
    };
  };

  return {
    Component,
    children,
    slots,
    classNames,
    getGridItemProps,
  };
}

export type UseGridReturn = ReturnType<typeof useGridItem>;
