const App = `import {Input} from "@vhsys-ui/react";

export default function App() {
  return (
    <Input
      isReadOnly
      type="email"
      label="Email"
      variant="bordered"
      defaultValue="jb.silva@vhsys.com.br"
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
