import {forwardRef, HTMLVhsysUIProps} from "@vhsys-ui/system";
import {useDOMRef} from "@vhsys-ui/react-utils";
import {clsx} from "@vhsys-ui/shared-utils";

import {useCardContext} from "./card-context";

const CardBody = forwardRef<"div", HTMLVhsysUIProps<"div">>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const bodyStyles = clsx(classNames?.body, className);

  return (
    <Component ref={domRef} className={slots.body?.({class: bodyStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardBody.displayName = "VhsysUI.CardBody";

export default CardBody;
