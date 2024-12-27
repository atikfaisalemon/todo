import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const [check, setCheck] = useState(false);
  console.log(todoList);

  const addTodo = () => {
    setTodoList([
      ...todoList,
      { title: text, isComplete: false, id: todoList.length + 1 },
    ]);
    setText("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const isCheck = (id) => {
    setTodoList((prvTodo) => {
      return prvTodo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  console.log(todoList);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <button type="submit" onClick={addTodo}>
        Submit
      </button>

      <ul>
        {todoList.map((todo) => (
          <li className="list-none flex flex-row gap-6 " key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={todo.id}
              value={todo.isComplete}
              onChange={() => {
                isCheck(todo.id);
              }}
            />

            <span
              style={{
                textDecoration: todo.isComplete ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
