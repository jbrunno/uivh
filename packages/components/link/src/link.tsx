import {forwardRef} from "@vhsys-ui/system";
import {LinkIcon} from "@vhsys-ui/shared-icons";
import {linkAnchorClasses} from "@vhsys-ui/theme";

import {UseLinkProps, useLink} from "./use-link";

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<"a", LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = "VhsysUI.Link";

export default Link;
