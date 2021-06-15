import { useEffect, useState } from "react";

export const useTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
    return () => {};
  }, [tasks]);

  const addNewTask = (task) => {
    setTasks((prevTask) => [...prevTask, task]);
  };

  const editTask = (uuid, task) => {
    console.log(task);
    const _task = tasks.map((_task) => {
      return _task.uuid === uuid ? { ..._task, ...task } : _task;
    });
    setTasks(_task);
  };

  const deleteTask = (uuid) => {
    let _tasks = tasks.map((task) => {
      if (task.uuid !== uuid) return task;
    });
    _tasks = _tasks.filter((task) => {
      if (task) return task;
    });
    setTasks(_tasks);
  };

  return { tasks, addNewTask, editTask, deleteTask, setTasks };
};
