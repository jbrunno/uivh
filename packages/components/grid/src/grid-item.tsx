import type {ReactNode} from "react";

import {forwardRef} from "@vhsys-ui/system-rsc";

import {UseGridItemProps, useGridItem} from "./use-grid-item";

export interface GridProps extends UseGridItemProps {
  children: ReactNode;
}

const Grid = forwardRef<"div", GridProps>((props, ref) => {
  const {Component, children, classNames, slots, getGridItemProps} = useGridItem({
    ...props,
  });

  return (
    <Component ref={ref} className={slots.base({class: classNames?.base})} {...getGridItemProps()}>
      {children}
    </Component>
  );
});

Grid.displayName = "UI.Grid";

export default Grid;
