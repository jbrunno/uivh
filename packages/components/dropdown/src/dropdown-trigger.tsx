import {forwardRef} from "@vhsys-ui/system";
import {PopoverTrigger} from "@vhsys-ui/popover";

import {useDropdownContext} from "./dropdown-context";

export interface DropdownTriggerProps {
  children?: React.ReactNode;
}

/**
 * DropdownTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
const DropdownTrigger = forwardRef<"button", DropdownTriggerProps>((props, _) => {
  const {getMenuTriggerProps} = useDropdownContext();

  const {children, ...otherProps} = props;

  return <PopoverTrigger {...getMenuTriggerProps(otherProps)}>{children}</PopoverTrigger>;
});

DropdownTrigger.displayName = "VhsysUI.DropdownTrigger";

export default DropdownTrigger;
