import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    "Do your Homework",
    "Drink water",
    "Complete Assignment",
  ]);

  const [input, setInput] = useState("");
  console.log("🔫", input);

  const addTodo = (e) => {
    e.preventDefault(); // It will stop the referesh
    console.log("👽", "I am The alien");
    // setTodos([...previous Array,latest input])
    setTodos([...todos, input]);
    setInput(""); // clearing up the input after clicking submit
  };

  return (
    <div className="App">
      <form action="">
        <h1>Hello</h1>

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

      <Todo text={todos} />
    </div>
  );
}

export default App;
