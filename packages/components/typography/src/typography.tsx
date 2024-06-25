import {forwardRef} from "@vhsys-ui/system";
import {useMemo} from "react";

import {useTypography, UseTypographyProps} from "./use-typography";

export interface TypographyProps extends UseTypographyProps {}

const Typography = forwardRef<
  "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  TypographyProps
>((props, ref) => {
  const {Component, getProps, variant} = useTypography({
    ...props,
    ref,
  });

  const Wrapper = useMemo(() => {
    return <Component {...getProps()} />;
  }, [variant, getProps]);

  return Wrapper;
});

Typography.displayName = "UI.Typography";

export default Typography;
