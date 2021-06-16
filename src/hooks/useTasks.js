import { useEffect, useState } from "react";
import { TodoConnection } from "../services/todoServices";
import { v4 as uuidv4 } from "uuid";
import { URI } from "../config";
export const useTask = (id, _tasks) => {
  const Conn = new TodoConnection(URI);
  const [tasks, setTasks] = useState(_tasks);

  useEffect(() => {
    setTasks(_tasks);
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return () => {};
  }, [tasks]);

  const addNewTask = (task) => {
    task = { ...task, done: false, _id: uuidv4() };
    Conn.updateFolder(id, { tasks: [...tasks, task] }).then(() => {
      setTasks((prevTask) => [...prevTask, task]);
    });
  };

  const editTask = (_id, task) => {
    const _task = tasks.map((_task) => {
      return _task._id === _id ? { ..._task, ...task } : _task;
    });

    Conn.updateFolder(id, { tasks: _task }).then(() => {
      setTasks(_task);
    });
  };

  const deleteTask = (_id) => {
    let _tasks = tasks.map((task) => {
      if (task._id !== _id) return task;
    });
    _tasks = _tasks.filter((task) => {
      if (task) return task;
    });
    setTasks(_tasks);
  };

  return { tasks, addNewTask, editTask, deleteTask, setTasks };
};
