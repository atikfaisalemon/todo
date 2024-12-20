import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const isDuplicate = todoList.some((item) => item.title === todo.title);
    console.log("isDuplicate", isDuplicate);
    if (isDuplicate) {
      console.log("Duplicated todo found!");
      return;
    } else {
      setTodoList([...todoList, todo]);
      setText("");
    }
  };

  const updateTodo = (todo) => {
    const remainTODO = todoList.filter((item) => item.title !== todo.title);
    setTodoList([...remainTODO, todo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ title: text, check: false });
  };

  console.log("list", todoList);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {todoList
          .sort((a, b) => a.check - b.check)
          .map((todo, index) => (
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              key={index}
            >
              <input
                type="checkbox"
                name=""
                id=""
                checked={todo.check}
                onChange={(e) => {
                  const updatedTODO = {
                    ...todo,
                    check: e.target.checked,
                  };
                  updateTodo(updatedTODO);
                }}
              />
              <div
                style={todo.check ? { textDecorationLine: "line-through" } : {}}
              >
                {todo.title}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
