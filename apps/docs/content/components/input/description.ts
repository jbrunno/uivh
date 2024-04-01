const App = `import {Input} from "@vhsys-ui/react";

export default function App() {
  return (
    <Input
      type="email"
      label="Email"
      defaultValue="jb.silva@vhsys.com.br"
      description="We'll never share your email with anyone else."
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
