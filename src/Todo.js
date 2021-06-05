import React from "react";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Modal,
  ListItemText,
} from "@material-ui/core";

function Todo({ todo }) {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setClose(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h1>I am a modal</h1>
          <button onClick={(e) => setOpen(false)}></button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={todo.todo} secondary="Dummy DeadLine ⏰" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>edit me</button>
        <DeleteForeverIcon
          onClick={(e) => db.collection("todos").doc(todo.id).delete()}
        >
          Delete me
        </DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
