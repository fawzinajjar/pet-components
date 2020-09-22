import React, { useState, useEffect } from "react";
import Todos from "./Todos";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  useEffect(() => {
    console.log("input Value : ", inputValue);
    console.log("toDo items : ", toDoItems);
  });
  const onChangeItem = (e) => {
    setInputValue(e.target.value);
  };
  const addTodo = () => {
    setToDoItems([...toDoItems, { text: inputValue }]);
  };
  const deleteTodo = (index) => {
    const newToDoItems = toDoItems.filter((item, i) => index !== i);
    setToDoItems(newToDoItems);
  };
  return (
    <div>
      {toDoItems.map((item, index) => [
        <Todos
          text={item.text}
          key={index}
          removeToDo={deleteTodo}
          index={index}
        />,
      ])}
      <input onChange={(e) => onChangeItem(e)} />
      <button onClick={addTodo}>add Todo</button>
    </div>
  );
};

export default Todo;
