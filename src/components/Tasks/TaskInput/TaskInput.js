import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import classes from "./TaskInput.module.css"; // MAKE ALSO UNIQUE CLASSES
// import styled from "styled-components"; // YOU HAVE TO INSTALL ITS PACKAGE FIRSTLY.
// WE USE IT TO MAKE EVERY CLASS UNIQUE

// const FormControl = styled.div`
//   // IT A METHOD LIKE STYLED.DIV() = STYLED.DIV``\SO THEY HAVE PROPS
//   .form-control {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.onInvalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.onInvalid ? "red" : "gray")};
//     background-color: ${(props) => (props.onInvalid ? "pink" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   .form-control {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }

//   /* &.invalid input {
//     border-color: red;
//     background-color: pink;
//   } */
//   /* &.invalid label {
//     font-weight: bold;
//     color: red;
//   } */
// `;

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
      {/* <FormControl className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/* <FormControl onInvalid={!isValid}> */}
      <div
        className={`${classes["form-control"]} ${
          // !isValid ? classes.invalid : "" // ==
          !isValid && classes.invalid
        }`}
      >
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
