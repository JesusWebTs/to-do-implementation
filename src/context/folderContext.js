import React from "react";

const FolderContext = React.createContext({
  folder: "",
  tasks: [],
});

export default {
  FolderProvider: FolderContext.Provider,
  FolderContext,
};
