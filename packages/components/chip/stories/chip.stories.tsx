import React from "react";
import {Meta} from "@storybook/react";
import {chip} from "@vhsys-ui/theme";
import {Avatar} from "@vhsys-ui/avatar";
import {CheckIcon} from "@vhsys-ui/shared-icons";

import {Chip} from "../src";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "dot"],
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
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Chip>;

const defaultProps = {
  ...chip.defaultVariants,
  children: "Chip",
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const StartContent = {
  args: {
    ...defaultProps,
    startContent: (
      <span aria-label="celebration" className="ml-1" role="img">
        🎉
      </span>
    ),
  },
};

export const EndContent = {
  args: {
    ...defaultProps,
    endContent: (
      <span aria-label="rocket" className="mr-1" role="img">
        🚀
      </span>
    ),
  },
};

export const Closeable = {
  args: {
    ...defaultProps,
    // eslint-disable-next-line
    onClose: () => console.log("Close"),
  },
};

export const CustomCloseIcon = {
  args: {
    ...defaultProps,
    endContent: <CheckIcon />,
    // eslint-disable-next-line
    onClose: () => console.log("Close"),
  },
};

export const WithAvatar = {
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    avatar: <Avatar name="JW" src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />,
  },
};

const HiddenOverflowTemplate = (args: ChipProps) => (
  <div className="w-20 border-danger-500 border-2">
    <Chip {...args} />
  </div>
);

export const HiddenOverflow = {
  render: HiddenOverflowTemplate,
  args: {
    ...defaultProps,
    children: "Hello World!",
  },
};
