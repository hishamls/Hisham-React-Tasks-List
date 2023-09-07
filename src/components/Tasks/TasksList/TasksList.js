import React from "react";

import TaskItem from "../CourseGoalItem/TaskItem";
import "./TasksList.css";

const CourseGoalList = (props) => {
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

export default CourseGoalList;
