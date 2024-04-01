export {Section as BaseSection} from "@react-stately/collections";
import {SectionProps as BaseSectionProps} from "@react-types/shared";
import {HTMLVhsysUIProps, As} from "@vhsys-ui/system";

/**
 * A modified version of the SectionProps from @react-types/shared, with the addition of the VhsysUI props.
 *
 */
export type SectionProps<Type extends As = "div", T extends object = {}> = BaseSectionProps<T> &
  HTMLVhsysUIProps<Type>;
