import React, { useState, useEffect } from "react";
import "./styles.css";
import { ListContainer, AddNewForm } from "../../components";
import { useTask } from "../../hooks/useTasks";
import { useRoute } from "wouter";

function TaskListPage() {
  const storage = window.localStorage;
  const type = "task";
  const _task = JSON.parse(storage.getItem("tasks"));
  const [match, params] = useRoute("/folder/:id");
  const { id } = params;

  storage.setItem("F_id", id);

  const { addNewTask, editTask, tasks } = useTask(id, _task);

  return (
    <div className="container">
      <ListContainer type={type} listItems={tasks} upload={editTask} />
      <AddNewForm type={type} cb={addNewTask} />
    </div>
  );
}

export default TaskListPage;
