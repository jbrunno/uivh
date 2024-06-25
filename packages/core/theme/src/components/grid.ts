import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Grid wrapper **Tailwind Variants** component
 *
 * @example
 * <div className={grid())}>
 *   // children
 * </div>
 */
const grid = tv({
  slots: {
    base: ["flex", "flex-wrap", "-mx-2"],
  },
  variants: {
    container: {
      true: "container mx-auto",
    },
    justifyContent: {
      start: {},
      center: {},
      end: {},
      between: {},
    },
    alignItems: {
      start: {},
      center: {},
      end: {},
    },
  },
  compoundSlots: [
    {
      slots: ["base"],
      justifyContent: "start",
      class: "justify-start",
    },
    {
      slots: ["base"],
      justifyContent: "center",
      class: "justify-center",
    },
    {
      slots: ["base"],
      justifyContent: "end",
      class: "justify-end",
    },
    {
      slots: ["base"],
      justifyContent: "between",
      class: "justify-between",
    },
    {
      slots: ["base"],
      alignItems: "start",
      class: "items-start",
    },
    {
      slots: ["base"],
      alignItems: "center",
      class: "items-center",
    },
    {
      slots: ["base"],
      alignItems: "end",
      class: "items-end",
    },
  ],
});

const gridItem = tv({
  slots: {
    base: "px-2",
  },
  variants: {
    sm: {
      1: "sm:w-1/12",
      2: "sm:w-2/12",
      3: "sm:w-3/12",
      4: "sm:w-4/12",
      5: "sm:w-5/12",
      6: "sm:w-6/12",
      7: "sm:w-7/12",
      8: "sm:w-8/12",
      9: "sm:w-9/12",
      10: "sm:w-10/12",
      11: "sm:w-11/12",
      12: "sm:w-full",
    },
    md: {
      1: "md:w-1/12",
      2: "md:w-2/12",
      3: "md:w-3/12",
      4: "md:w-4/12",
      5: "md:w-5/12",
      6: "md:w-6/12",
      7: "md:w-7/12",
      8: "md:w-8/12",
      9: "md:w-9/12",
      10: "md:w-10/12",
      11: "md:w-11/12",
      12: "md:w-full",
    },
  },
});

export type GridVariantProps = VariantProps<typeof grid>;
export type GridSlots = keyof ReturnType<typeof grid>;

export type GridItemVariantProps = VariantProps<typeof gridItem>;
export type GridItemSlots = keyof ReturnType<typeof gridItem>;

export {grid, gridItem};
