import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [nText, setNText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (nText.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      props.onAdd(nText);
      setNText(""); // RESET THE INPUT EMPTY
    }
  };

  //1. inline style: style={{ color: isValid ? "black" : "red" }}
  //2. CSS style classes: .form-control.invalid input { border-color: red; background-color: pink; }
  // JUST WRITE className={`form-control FIRST CLASS ${!isValid ? "invalid" SECOND CLASS : ""}`}

  return (
    <form onSubmit={submitHandler}>
      {/* NOT WORK <div className={`form-control ${isValid ? "" : "invalid"}`}> */}
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label
        // style={{ color: isValid ? "black" : "red" }}
        >
          Day Tasks
        </label>
        <input
          value={nText} // BINDING the value to the state
          type="text"
          onChange={changeHandler}
          // style={{
          //   backgroundColor: isValid ? "white" : "pink",
          //   borderColor: isValid ? "gray" : "red",
          // }}
        />
      </div>
      <Button type="submit">Add a Task</Button>
    </form>
  );
};

export default TaskInput;
