import React from "react";
import {Meta} from "@storybook/react";
import {Activity, Camera} from "@vhsys-ui/shared-icons";
import {avatar} from "@vhsys-ui/theme";

import {Avatar} from "../src";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
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
  },
} as Meta<typeof Avatar>;

const defaultProps = {
  ...avatar.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const WithText = {
  args: {
    ...defaultProps,
    name: "JW",
    color: "danger",
  },
};

export const IsDisabled = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
    color: "secondary",
    isBordered: true,
    isDisabled: true,
  },
};

export const WithImage = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
  },
};

export const isBordered = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
    color: "secondary",
    isBordered: true,
  },
};

export const isFocusable = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
    isFocusable: true,
  },
};

export const WithIcon = {
  args: {
    ...defaultProps,
    size: "lg",
  },
};

export const Custom = {
  args: {
    ...defaultProps,
    icon: <Activity fill="currentColor" size={20} />,
    radius: "xl",
    classNames: {
      base: "shadow-lg bg-cyan-200 dark:bg-cyan-800",
    },
  },
};

export const CustomSize = {
  args: {
    ...defaultProps,
    classNames: {
      base: "w-32 h-32 text-base",
    },
  },
};

export const CustomSizeImg = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
    name: "Junior",
    classNames: {
      base: "w-32 h-32 text-base",
    },
  },
};

export const DefaultIcon = {
  args: {
    ...defaultProps,
    classNames: {
      icon: "text-default-400",
    },
  },
};

export const IconFallback = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
    showFallback: true,
  },
};

export const InitialsFallback = {
  args: {
    ...defaultProps,
    src: "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no",
    name: "Junior",
    showFallback: true,
  },
};

export const CustomFallback = {
  args: {
    ...defaultProps,
    src: "https://images.unsplash.com/broken",
    showFallback: true,
    fallback: (
      <Camera className="animate-pulse w-6 h-6 text-default-500" fill="currentColor" size={20} />
    ),
  },
};

export const BrokenImage = {
  args: {
    ...defaultProps,
    src: "https://images.unsplash.com/broken-image",
    name: "Junior",
    showFallback: true,
  },
};
