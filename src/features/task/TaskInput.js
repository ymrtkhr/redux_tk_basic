import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState("");
  const handoleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={handoleTitleChange}
        placeholder="Please type in"
      />
      <button>New</button>
    </form>
  );
};

export default TaskInput;
