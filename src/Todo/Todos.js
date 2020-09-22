import React from "react";

const Todos = (props) => {
  return (
    <div>
      <p>
        {props.text}{" "}
        <button onClick={() => props.removeToDo(props.index)}>Delete</button>
      </p>
    </div>
  );
};
export default Todos;
