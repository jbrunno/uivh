import type {GridNode} from "@react-types/grid";

import {forwardRef, HTMLVhsysUIProps} from "@vhsys-ui/system";
import {useDOMRef, filterDOMProps} from "@vhsys-ui/react-utils";
import {clsx, dataAttr} from "@vhsys-ui/shared-utils";
import {useTableColumnHeader, useTableSelectAllCheckbox} from "@react-aria/table";
import {mergeProps} from "@react-aria/utils";
import {useFocusRing} from "@react-aria/focus";
import {Checkbox} from "@vhsys-ui/checkbox";
import {VisuallyHidden} from "@react-aria/visually-hidden";

import {ValuesType} from "./use-table";

export interface TableSelectAllCheckboxProps<T = object> extends HTMLVhsysUIProps<"th"> {
  /**
   * The table column.
   */
  node: GridNode<T>;
  slots: ValuesType["slots"];
  state: ValuesType["state"];
  color: ValuesType["color"];
  disableAnimation: ValuesType["disableAnimation"];
  checkboxesProps: ValuesType["checkboxesProps"];
  selectionMode: ValuesType["selectionMode"];
  classNames?: ValuesType["classNames"];
}

const TableSelectAllCheckbox = forwardRef<"th", TableSelectAllCheckboxProps>((props, ref) => {
  const {
    as,
    className,
    node,
    slots,
    state,
    selectionMode,
    color,
    checkboxesProps,
    disableAnimation,
    classNames,
    ...otherProps
  } = props;

  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const {columnHeaderProps} = useTableColumnHeader({node}, state, domRef);
  const {isFocusVisible, focusProps} = useFocusRing();

  const {checkboxProps} = useTableSelectAllCheckbox(state);

  const thStyles = clsx(classNames?.th, className, node.props?.className);

  const isSingleSelectionMode = selectionMode === "single";

  const {onChange, ...otherCheckboxProps} = checkboxProps;

  return (
    <Component
      ref={domRef}
      data-focus-visible={dataAttr(isFocusVisible)}
      {...mergeProps(
        columnHeaderProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps,
        }),
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
        }),
      )}
      className={slots.th?.({class: thStyles})}
    >
      {isSingleSelectionMode ? (
        <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
      ) : (
        <Checkbox
          color={color}
          disableAnimation={disableAnimation}
          onValueChange={onChange}
          {...mergeProps(checkboxesProps, otherCheckboxProps)}
        />
      )}
    </Component>
  );
});

TableSelectAllCheckbox.displayName = "VhsysUI.TableSelectAllCheckbox";

export default TableSelectAllCheckbox;
