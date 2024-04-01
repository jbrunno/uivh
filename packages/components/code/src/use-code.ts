import type {CodeVariantProps} from "@vhsys-ui/theme";
import type {HTMLVhsysUIProps, PropGetter} from "@vhsys-ui/system-rsc";

import {code} from "@vhsys-ui/theme";
import {mapPropsVariants} from "@vhsys-ui/system-rsc";
import {ReactRef} from "@vhsys-ui/react-utils";
import {useMemo} from "react";

export interface UseCodeProps extends HTMLVhsysUIProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const classNames = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: classNames,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;
