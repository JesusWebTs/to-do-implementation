import { useEffect, useState } from "react";
import Folders from "../moocks";

export const useFolder = () => {
  const [folders, setFolders] = useState();
  const [targetFolder, setTargetFolder] = useState("");

  useEffect(() => {
    setFolders(Folders);
    return () => {};
  }, []);

  const addNewFolder = (folder) => {
    setFolders((prevTask) => [...prevTask, folder]);
  };

  const editFolder = (uuid, folder) => {
    console.log(folder);
    const _folder = folders.map((_folder) => {
      return _folder.uuid === uuid ? { ..._folder, ...folder } : _folder;
    });
    setFolders(_folder);
  };

  const deleteFolder = (uuid) => {
    let _folders = folders.map((folder) => {
      if (folder.uuid !== uuid) return folder;
    });
    _folders = _folders.filter((folder) => {
      if (folder) return folder;
    });
    setFolders(_folders);
  };

  return {
    folders,
    addNewFolder,
    editFolder,
    deleteFolder,
    targetFolder,
    setTargetFolder,
  };
};
