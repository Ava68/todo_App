import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

function Todo({ text }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={text} secondary="Dummy DeadLine ⏰" />
      </ListItem>
    </List>
  );
}

export default Todo;
