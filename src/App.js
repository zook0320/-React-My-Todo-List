import React, { useState } from "react";
import "./App.css";

function TodoContainer({ todo }) {
  return (
    <div className="user-card">
      <div>{todo.List}</div>
    </div>
  );
}

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, List: 'react를 배워봅시다.' }
  ]);

  const [List, setList] = useState('');

  const addClickHandler = () => {
    if (List) {
      const newList = {
        id: todoList.length + 1,
        List: List,
      };

      setTodoList([...todoList, newList]);
      setList('');
    }
  };

  return (
    <div>
      <div className="input">
        <input
          value={List}
          onChange={(e) => setList(e.target.value)}
        />
        <button onClick={addClickHandler} >
          추가하기
        </button>
      </div>
      <h1 className="h1">Todo List</h1>
      <div className="app-container">
        {todoList.reverse().map((todo) => {
          return <TodoContainer todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
