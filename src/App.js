import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import boy from "./images/boy.png";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    // this code here fires when  the app.js loads or setTodos state change
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault(); // It will stop the referesh

    //adding to the collection todos in a database
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // clearing up the input after clicking submit
  };

  return (
    <div className="App">
      <div className="content">
        <form action="">
          <h1>My todo</h1>

          <FormControl>
            <InputLabel> ✅ Write a Todo</InputLabel>
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
          </FormControl>
          <Button
            disabled={!input}
            type="submit"
            onClick={addTodo}
            variant="contained"
            color="primary"
          >
            Add Todo
          </Button>
        </form>

        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>

      <div className="boy">
        <img className="boy__img" src={boy} alt="" />
      </div>
    </div>
  );
}

export default App;
