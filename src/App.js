import React, { useState } from "react";

import TasksList from "./components/Tasks/TasksList/TasksList";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  // const addTaskHandler = (enteredText) => {
  //   setCourseGoals((prevGoals) => {
  //     const updatedGoals = [...prevGoals];
  //     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
  //     return updatedGoals;
  //   });
  // };
  // }
  const addTaskHandler = (newTask) => {
    setTasks((preTasks) => {
      return [...preTasks, { text: newTask, id: Math.random().toString() }];
    });
  }; // worked but the new lists come enddly

  // const deleteItemHandler = (goalId) => {
  //   setCourseGoals((prevGoals) => {
  //     const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };

  const deleteHandler = (tId) => {
    setTasks((preTasks) => preTasks.filter((t) => t.id !== tId));
  }; // you can omit return

  let content = "";
  // (
  //   <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  // );

  if (tasks.length > 0) {
    content = <TasksList items={tasks} onDelete={deleteHandler} />;
  } else
    content = (
      <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
    );

  return (
    <div>
      <section id="goal-form">
        <TaskInput onAdd={addTaskHandler} />
      </section>
      <section id="goals">
        {content}

        {/* {!tasks && ( //NOT WORK because the state not (true or false) but it's a digit.
          <p style={{ textAlign: "center" }}>You have not any tasks</p>
        )}
        {tasks && <TasksList items={tasks} onDelete={deleteHandler} />} */}
      </section>
    </div>
  );
};

export default App;
