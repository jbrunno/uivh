/* eslint-disable react/display-name */
import React from "react";
import {Meta} from "@storybook/react";
import {typography} from "@vhsys-ui/theme";

import {Typography, TypographyProps} from "../src";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "buttonLarge",
        "buttonMedium",
        "buttonSmall",
        "caption",
        "overline",
      ],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "neutral",
        "neutral-medium",
        "neutral-light",
        "white",
        "primary",
        "success",
        "warning",
        "danger",
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Typography>;

const defaultProps = {
  children: "Vhsys a melhor ERP da america latina",
  ...typography.defaultVariants,
};

const Template = (args: TypographyProps) => {
  return <Typography {...args}>{args.children}</Typography>;
};

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const Headline1 = {
  render: Template,
  args: {
    ...defaultProps,
    variant: "h1",
  },
};

export const Subtitle1 = {
  render: Template,
  args: {
    ...defaultProps,
    variant: "subtitle1",
  },
};

export const Body1 = {
  render: Template,
  args: {
    ...defaultProps,
    variant: "body1",
  },
};

export const CustomColor = {
  render: Template,
  args: {
    ...defaultProps,
    color: "primary",
  },
};
