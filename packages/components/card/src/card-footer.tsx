import {forwardRef, HTMLVhsysUIProps} from "@vhsys-ui/system";
import {useDOMRef} from "@vhsys-ui/react-utils";
import {clsx} from "@vhsys-ui/shared-utils";

import {useCardContext} from "./card-context";

export interface CardFooterProps extends HTMLVhsysUIProps<"div"> {}

const CardFooter = forwardRef<"div", CardFooterProps>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const footerStyles = clsx(classNames?.footer, className);

  return (
    <Component ref={domRef} className={slots.footer?.({class: footerStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardFooter.displayName = "VhsysUI.CardFooter";

export default CardFooter;
