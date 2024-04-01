const App = `import {Input} from "@vhsys-ui/react";

export default function App() {
  return (
    <Input
      isRequired
      type="email"
      label="Email"
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
