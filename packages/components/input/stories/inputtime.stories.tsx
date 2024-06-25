import React from "react";
import {Meta} from "@storybook/react";
import {input} from "@vhsys-ui/theme";

import {InputTime} from "../src";

export default {
  title: "Components/InputTime",
  component: InputTime,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["flat", "faded", "bordered", "underlined"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    labelPlacement: {
      control: {
        type: "select",
      },
      options: ["inside", "outside", "outside-left"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof InputTime>;

const defaultProps = {
  ...input.defaultVariants,
  label: "Label do input",
};

const Template = (args: any) => (
  <div className="w-full max-w-[440px]">
    <InputTime {...args} />
  </div>
);

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
  startContent: (
    <div className="pointer-events-none flex items-center">
      <span className="text-default-400 text-sm">$</span>
    </div>
  ),
};

export const Required = {
  render: Template,
  args: {
    ...defaultProps,
    isRequired: true,
  },
};

export const Disabled = {
  render: Template,
  args: {
    ...defaultProps,
    variant: "faded",
    isDisabled: true,
  },
};

export const ReadOnly = {
  render: Template,
  args: {
    ...defaultProps,
    variant: "bordered",
    isReadOnly: true,
  },
};

export const IsInvalid = {
  render: Template,
  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: "Please enter a valid Date",
  },
};
