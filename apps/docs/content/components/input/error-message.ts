const App = `import {Input} from "@vhsys-ui/react";

export default function App() {
  return (
    <Input
      type="email"
      label="Email"
      variant="bordered"
      defaultValue="jb.silva2vhsys.com.br"
      isInvalid={true}
      errorMessage="Please enter a valid email"
      className="max-w-xs"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
