import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Todo } from './Interfaces';

function App(): JSX.Element {
  // let name: string = 'Andre';
  // let age: any = 30;
  // let isCool: boolean = false;

  // name = 30;
  // age = 'old';

  // function greeting(name: string): string {
  //   return `Hi ${name}`;
  // }

  // const greeting2 = (name: string): string => {
  //   return `Hi ${name}`;
  // }

  // greeting('Andre')
  // greeting2('Andre')
  const [age, setAge] = useState<number | string | null>(30);
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false,
    },
  ]);

  function updateAge(): void {
    setAge(null);
  }

  function updateTodos(): void {
    setTodos([
      ...todos,
      {
        id: 4,
        title: 'Finish video',
        isComplete: false,
        isEditing: false,
        expires: 456,
      },
    ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TodoList todos={todos} name="Andre" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
