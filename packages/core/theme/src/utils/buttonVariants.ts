const solid = {
  default: "bg-default-400 text-default-foreground",
  primary: "bg-primary text-background",
  secondary: "bg-secondary text-background",
  success: "bg-success text-background",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background",
};

const ghost = {
  default: "border-default text-default-foreground hover:!bg-default-400",
  primary: "border-primary text-primary hover:!text-primary hover:!bg-default-400",
  secondary: "border-secondary text-secondary hover:text-secondary hover:!bg-default-400",
  success: "border-success text-success hover:!text-success hover:!bg-default-400",
  warning: "border-warning text-warning hover:!text-warning hover:!bg-default-400",
  danger: "border-danger text-danger hover:!text-danger hover:!bg-default-400",
  foreground: "border-foreground text-foreground hover:!bg-foreground",
};

export const buttonVariants = {
  solid,
  ghost,
};
