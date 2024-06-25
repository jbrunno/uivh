import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {collapseAdjacentVariantBorders, buttonVariants, dataFocusVisibleClasses} from "../utils";

/**
 * Button wrapper **Tailwind Variants** component
 *
 * const classNames = button({...})
 *
 * @example
 * <button
 *  className={classNames())}
 *  data-pressed={true/false}
 *  data-hover={true/false}
 *  data-focus={true/false}
 *  data-focus-visible={true/false}
 * >
 *   Button
 * </button>
 */
const button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    // focus ring
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      solid: "",
      ghost: "bg-transparent",
    },
    size: {
      sm: "px-unit-3 min-w-unit-16 h-unit-8 text-small gap-unit-2 rounded-lg",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-lg",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    radius: {
      sm: "rounded",
      md: "rounded-lg",
      lg: "rounded-xl",
    },
    fullWidth: {
      true: "w-full",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none",
    },
    isIconOnly: {
      true: "px-unit-0 !gap-unit-0",
      false: "[&>svg]:max-w-[theme(spacing.unit-8)]",
    },
    disableAnimation: {
      true: "!transition-none",
      false:
        "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "secondary",
    radius: "md",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: buttonVariants.solid.default,
    },
    {
      variant: "solid",
      color: "primary",
      class: buttonVariants.solid.primary,
    },
    {
      variant: "solid",
      color: "secondary",
      class: buttonVariants.solid.secondary,
    },
    {
      variant: "solid",
      color: "success",
      class: buttonVariants.solid.success,
    },
    {
      variant: "solid",
      color: "warning",
      class: buttonVariants.solid.warning,
    },
    {
      variant: "solid",
      color: "danger",
      class: buttonVariants.solid.danger,
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: buttonVariants.ghost.default,
    },
    {
      variant: "ghost",
      color: "primary",
      class: buttonVariants.ghost.primary,
    },
    {
      variant: "ghost",
      color: "secondary",
      class: buttonVariants.ghost.secondary,
    },
    {
      variant: "ghost",
      color: "success",
      class: buttonVariants.ghost.success,
    },
    {
      variant: "ghost",
      color: "warning",
      class: buttonVariants.ghost.warning,
    },
    {
      variant: "ghost",
      color: "danger",
      class: buttonVariants.ghost.danger,
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: true,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
    },
    {
      isInGroup: true,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small",
    },
    {
      isInGroup: true,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small",
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large",
    },
    // isInGroup / ghost
    {
      isInGroup: true,
      variant: ["ghost"],
      color: "default",
      className: collapseAdjacentVariantBorders.default,
    },
    {
      isInGroup: true,
      variant: ["ghost"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary,
    },
    {
      isInGroup: true,
      variant: ["ghost"],
      color: "secondary",
      className: collapseAdjacentVariantBorders.secondary,
    },
    {
      isInGroup: true,
      variant: ["ghost"],
      color: "success",
      className: collapseAdjacentVariantBorders.success,
    },
    {
      isInGroup: true,
      variant: ["ghost"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning,
    },
    {
      isInGroup: true,
      variant: ["ghost"],
      color: "danger",
      className: collapseAdjacentVariantBorders.danger,
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-unit-8 w-unit-8 h-unit-8",
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-unit-10 w-unit-10 h-unit-10",
    },
    // variant  solid / hover
    {
      variant: ["solid"],
      color: "primary",
      class: "data-[hover=true]:bg-primary-600",
    },
    {
      variant: ["solid"],
      color: "secondary",
      class: "data-[hover=true]:bg-secondary-600",
    },
    {
      variant: ["solid"],
      color: "success",
      class: "data-[hover=true]:bg-success-600",
    },
    {
      variant: ["solid"],
      color: "warning",
      class: "data-[hover=true]:bg-warning-600",
    },
    {
      variant: ["solid"],
      color: "danger",
      class: "data-[hover=true]:bg-danger-600",
    },
    {
      variant: ["solid"],
      color: "default",
      class: "data-[hover=true]:bg-secondary-400",
    },
    // variant / isDisabled
    {
      isDisabled: true,
      color: "primary",
      class: "bg-primary-100  text-default-foreground",
    },
    {
      isDisabled: true,
      color: "secondary",
      class: "bg-secondary-100 text-default-foreground",
    },
    {
      isDisabled: true,
      color: "success",
      class: "bg-success-100 text-default-foreground",
    },
    {
      isDisabled: true,
      color: "warning",
      class: "bg-warning-100 text-default-foreground",
    },
    {
      isDisabled: true,
      color: "danger",
      class: "bg-danger-100 text-default-foreground",
    },
    {
      isDisabled: true,
      color: "default",
      class: "bg-gray-100 text-default-foreground",
    },
  ],
});

// size: {
//   sm: "px-3 h-8 text-small",
//   md: "px-4 h-10 text-medium",
//   lg: "px-6 h-12 text-medium",
// },

/**
 * ButtonGroup wrapper **Tailwind Variants** component
 *
 * const classNames = buttonGroup({...})
 *
 * @example
 * <div role="group" className={classNames())}>
 *   // button elements
 * </div>
 */
const buttonGroup = tv({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroup>;
export type ButtonVariantProps = VariantProps<typeof button>;

export {button, buttonGroup};
