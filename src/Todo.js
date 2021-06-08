import React from "react";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Modal,
  ListItemText,
  Button,
} from "@material-ui/core";

// this is how you style things in material ui
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({ todo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [input, setInput] = useState("");

  const handleClose = () => {
    setClose(false);
  };

  const updateTodo = () => {
    //update the todo with new input text
    db.collection("todos").doc(todo.id).set({ todo: input }, { merge: true });
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <input
            placeholder={todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button onClick={updateTodo}>Update todo</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={todo.todo} secondary="Dummy DeadLine ⏰" />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
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
