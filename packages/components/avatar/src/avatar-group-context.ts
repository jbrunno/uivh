import {createContext} from "@vhsys-ui/react-utils";

import {ContextType} from "./use-avatar-group";

export const [AvatarGroupProvider, useAvatarGroupContext] = createContext<ContextType>({
  name: "AvatarGroupContext",
  strict: false,
});
