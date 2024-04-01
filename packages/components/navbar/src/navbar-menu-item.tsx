import {forwardRef, HTMLVhsysUIProps} from "@vhsys-ui/system";
import {useDOMRef} from "@vhsys-ui/react-utils";
import {clsx, dataAttr} from "@vhsys-ui/shared-utils";

import {useNavbarContext} from "./navbar-context";

export interface NavbarMenuItemProps extends HTMLVhsysUIProps<"li"> {
  /**
   * Whether the item is active or not.
   * @default false
   */
  isActive?: boolean;
  children?: React.ReactNode;
}

const NavbarMenuItem = forwardRef<"li", NavbarMenuItemProps>((props, ref) => {
  const {className, children, isActive, ...otherProps} = props;

  const domRef = useDOMRef(ref);

  const {slots, isMenuOpen, classNames} = useNavbarContext();

  const styles = clsx(classNames?.menuItem, className);

  return (
    <li
      ref={domRef}
      className={slots.menuItem?.({class: styles})}
      data-active={dataAttr(isActive)}
      data-open={dataAttr(isMenuOpen)}
      {...otherProps}
    >
      {children}
    </li>
  );
});

NavbarMenuItem.displayName = "VhsysUI.NavbarMenuItem";

export default NavbarMenuItem;
