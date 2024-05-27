import React from "react";
import {Meta} from "@storybook/react";
import {Link} from "@vhsys-ui/link";

import {User} from "../src";

export default {
  title: "Components/User",
  component: User,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/TNGKwzEFrJcVbfR40fJnyp/TicTac-Design-System?node-id=319-27201&t=aYFlXrsnPs432izc-1",
    },
  },
} as Meta<typeof User>;

const url =
  "https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no";

export const Default = {
  args: {
    name: "Amanda Ivoniak",
    avatarProps: {
      src: url,
    },
  },
};

export const isFocusable = {
  args: {
    name: "Amanda Ivoniak",
    isFocusable: true,
    avatarProps: {
      src: url,
    },
  },
};

export const WithDefaultAvatar = {
  args: {
    name: "Amanda Ivoniak",
    avatarProps: {
      name: "Amanda Ivoniak",
      getInitials: (name) =>
        name
          .split(" ")
          .map((n) => n[0])
          .join(""),
    },
  },
};

export const WithDescription = {
  args: {
    name: "Amanda Ivoniak",
    description: "Software Engineer",
    avatarProps: {
      src: url,
    },
  },
};

export const WithLinkDescription = {
  args: {
    name: "Amanda Ivoniak",
    description: (
      <Link href="#" size="sm">
        @amandaivoniak
      </Link>
    ),
    avatarProps: {
      src: url,
    },
  },
};
