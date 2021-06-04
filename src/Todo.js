import React from "react";

function Todo({ text }) {
  return (
    <div>
      <ul>
        {text.map((index) => (
          <li>{index}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
