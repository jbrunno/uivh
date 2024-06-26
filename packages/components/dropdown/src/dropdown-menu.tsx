import {PopoverContent} from "@vhsys-ui/popover";
import {FocusScope} from "@react-aria/focus";
import {forwardRef} from "@vhsys-ui/system";
import {Menu, MenuProps} from "@vhsys-ui/menu";
import {ForwardedRef, ReactElement, Ref} from "react";

import {useDropdownContext} from "./dropdown-context";

interface Props<T> extends Omit<MenuProps<T>, "menuProps"> {}

function DropdownMenu<T extends object>(props: Props<T>, ref: ForwardedRef<HTMLUListElement>) {
  const {getMenuProps} = useDropdownContext();

  return (
    <PopoverContent>
      <FocusScope contain restoreFocus>
        <Menu {...getMenuProps<T>(props, ref)} />
      </FocusScope>
    </PopoverContent>
  );
}

export type DropdownMenuProps<T = object> = Props<T> & {ref?: Ref<HTMLElement>};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
export default forwardRef(DropdownMenu) as <T = object>(
  props: DropdownMenuProps<T>,
) => ReactElement;

DropdownMenu.displayName = "VhsysUI.DropdownMenu";
