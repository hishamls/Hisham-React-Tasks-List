import React from "react";

import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

const TasksList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((task) => (
        <TaskItem id={task.id} key={task.id} onDelete={props.onDelete}>
          {task.text}
        </TaskItem>
      ))}
    </ul>
    //worked without keys but warning in console!
  );
};

export default TasksList;
