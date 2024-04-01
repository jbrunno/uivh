import type {GridNode} from "@react-types/grid";

import {forwardRef, HTMLVhsysUIProps} from "@vhsys-ui/system";
import {useDOMRef, filterDOMProps} from "@vhsys-ui/react-utils";
import {clsx, dataAttr} from "@vhsys-ui/shared-utils";
import {useTableColumnHeader} from "@react-aria/table";
import {mergeProps} from "@react-aria/utils";
import {ChevronDownIcon} from "@vhsys-ui/shared-icons";
import {useFocusRing} from "@react-aria/focus";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {useHover} from "@react-aria/interactions";

import {ValuesType} from "./use-table";

// @internal
export interface TableColumnHeaderProps<T = object> extends HTMLVhsysUIProps<"th"> {
  slots: ValuesType["slots"];
  state: ValuesType["state"];
  classNames?: ValuesType["classNames"];
  /**
   * The table node to render.
   */
  node: GridNode<T>;
}

const TableColumnHeader = forwardRef<"th", TableColumnHeaderProps>((props, ref) => {
  const {as, className, state, node, slots, classNames, ...otherProps} = props;

  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const {columnHeaderProps} = useTableColumnHeader({node}, state, domRef);

  const thStyles = clsx(classNames?.th, className, node.props?.className);

  const {isFocusVisible, focusProps} = useFocusRing();
  const {isHovered, hoverProps} = useHover({});
  const {hideHeader, ...columnProps} = node.props;

  const allowsSorting = columnProps.allowsSorting;

  return (
    <Component
      ref={domRef}
      colSpan={node.colspan}
      data-focus-visible={dataAttr(isFocusVisible)}
      data-hover={dataAttr(isHovered)}
      data-sortable={dataAttr(allowsSorting)}
      {...mergeProps(
        columnHeaderProps,
        focusProps,
        filterDOMProps(columnProps, {
          enabled: shouldFilterDOMProps,
        }),
        allowsSorting ? hoverProps : {},
        otherProps,
      )}
      className={slots.th?.({class: thStyles})}
    >
      {hideHeader ? <VisuallyHidden>{node.rendered}</VisuallyHidden> : node.rendered}
      {allowsSorting && (
        <ChevronDownIcon
          aria-hidden="true"
          className={slots.sortIcon?.({class: classNames?.sortIcon})}
          data-direction={state.sortDescriptor?.direction}
          data-visible={dataAttr(state.sortDescriptor?.column === node.key)}
          strokeWidth={3}
        />
      )}
    </Component>
  );
});

TableColumnHeader.displayName = "VhsysUI.TableColumnHeader";

export default TableColumnHeader;
