import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoConnection } from "../services/todoServices";
import { URI } from "../config";
export const useFolder = () => {
  const Conn = new TodoConnection(URI);
  const [folders, setFolders] = useState([]);
  const [targetFolder, setTargetFolder] = useState("");

  useEffect(() => {
    Conn.getFolders().then((res) => setFolders(res));
    return () => {};
  }, []);

  const addNewFolder = async (folder) => {
    const _folder = { ...folder, _id: uuidv4(), tasks: [] };

    await Conn.createFolder(_folder).then((res) => {
      setFolders((prevTask) => [...prevTask, _folder]);
    });
    return true;
  };

  const editFolder = async (_id, folder) => {
    console.log({ _id, folder });
    await Conn.updateFolder(_id, folder).then(() => {
      const _folder = folders.map((_folder) => {
        return _folder._id === _id ? { ..._folder, ...folder } : _folder;
      });
      setFolders(_folder);
    });
    return true;
  };

  const deleteFolder = async (_id) => {
    await Conn.deleteFolder(_id).then(() => {
      let _folders = folders.map((folder) => {
        if (folder._id !== _id) return folder;
      });
      _folders = _folders.filter((folder) => {
        if (folder) return folder;
      });
      setFolders(_folders);
    });
    return true;
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
