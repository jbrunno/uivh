import React from "react";
import {Meta} from "@storybook/react";
import {grid} from "@vhsys-ui/theme";

import {Grid, GridItem, GridProps} from "../src";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    container: {
      control: {
        type: "boolean",
      },
    },
    justifyContent: {
      control: {
        type: "select",
      },
      options: ["start", "center", "end", "between"],
    },
    alignItems: {
      control: {
        type: "select",
      },
      options: ["start", "center", "end"],
    },
  },
} as Meta<typeof Grid>;

const defaultProps = {
  ...grid.defaultVariants,
};

const Template = (args: GridProps) => (
  <>
    <Grid container alignItems="center" justifyContent="center" {...args}>
      <GridItem md={2}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-2</div>
      </GridItem>
      <GridItem md={2}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-2</div>
      </GridItem>
      <GridItem md={2}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-2</div>
      </GridItem>
      <GridItem md={2}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-2</div>
      </GridItem>
      <GridItem md={4}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-4</div>
      </GridItem>
      <GridItem md={5}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-5</div>
      </GridItem>
      <GridItem md={7}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-7</div>
      </GridItem>
      <GridItem md={12}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-12</div>
      </GridItem>
      <GridItem md={6}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-6</div>
      </GridItem>
      <GridItem md={6}>
        <div className="bg-gray-700 w-full px-2 rounded my-2">col-6</div>
      </GridItem>
    </Grid>
  </>
);

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};
