/* eslint-disable react/display-name */
import React from "react";
import {Meta} from "@storybook/react";

import {Avatar, AvatarGroup, AvatarGroupProps} from "../src";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    color: {
      control: {type: "select"},
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: {type: "select"},
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
    spacing: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<typeof AvatarGroup>;

const Template = (args: AvatarGroupProps) => (
  <AvatarGroup {...args}>
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026712d" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026713d" />
  </AvatarGroup>
);

export const Default = {
  render: Template,

  args: {
    color: "primary",
    isBordered: true,
  },
};

export const Grid = {
  render: Template,

  args: {
    color: "primary",
    isBordered: true,
    max: 7,
    isGrid: true,
  },
};

export const isDisabled = {
  render: Template,

  args: {
    color: "warning",
    isBordered: true,
    isDisabled: true,
  },
};

export const WithMaxCount = {
  render: Template,

  args: {
    color: "primary",
    isBordered: true,
    max: 3,
  },
};

export const WithTotal = {
  render: Template,

  args: {
    color: "primary",
    isBordered: true,
    max: 3,
    total: 10,
  },
};

export const CustomCount = {
  render: Template,

  args: {
    color: "primary",
    isBordered: true,
    max: 3,
    total: 10,
    renderCount: (count: number) => (
      <p className="text-sm text-black dark:text-white ms-2">+{count}</p>
    ),
  },
};
