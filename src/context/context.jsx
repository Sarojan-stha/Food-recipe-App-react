import { useContext } from "react";

export const GlobalContext = useContext(null);

import React from "react";

export const GlobalState = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
