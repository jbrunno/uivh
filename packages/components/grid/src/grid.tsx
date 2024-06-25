import type {ReactNode} from "react";

import {forwardRef} from "@vhsys-ui/system-rsc";

import {UseGridProps, useGrid} from "./use-grid";

export interface GridProps extends UseGridProps {
  children: ReactNode;
}

const Grid = forwardRef<"div", GridProps>((props, ref) => {
  const {Component, children, classNames, slots, getGridProps} = useGrid({
    ...props,
  });

  return (
    <Component ref={ref} className={slots.base({class: classNames?.base})} {...getGridProps()}>
      {children}
    </Component>
  );
});

Grid.displayName = "UI.Grid";

export default Grid;
