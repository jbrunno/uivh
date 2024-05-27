import * as React from "react";
import {render} from "@testing-library/react";
import {Avatar} from "@vhsys-ui/avatar";

import {Badge} from "../src";

const content = <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWbW2Piga-2iOoCJVHoeFGm9o9F9N5N3QZBpOsiIf3BXiWRqpU=s88-w88-h88-c-k-no" />;

describe("Badge", () => {
  it("should render correctly", () => {
    const wrapper = render(<Badge>New</Badge>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLSpanElement>();

    render(<Badge ref={ref}>{content}</Badge>);
    expect(ref.current).not.toBeNull();
  });

  it("should render children and content", () => {
    const wrapper = render(
      <Badge content={<span data-testid="badge-content" />}>
        <span data-testid="badge-children">new</span>
      </Badge>,
    );

    expect(wrapper.getByTestId("badge-content")).toBeTruthy();
    expect(wrapper.getByTestId("badge-children")).toBeTruthy();
  });

  it("should be invisible if invisible is true", () => {
    const wrapper = render(
      <Badge isInvisible content={<span data-testid="badge-content" />} data-testid="badge-root">
        <span data-testid="badge-children">new</span>
      </Badge>,
    );

    expect(wrapper.getByTestId("badge-root")).toHaveAttribute("data-invisible", "true");
  });
});
