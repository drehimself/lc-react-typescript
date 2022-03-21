import React, { useState } from 'react';
import { Todo } from './Interfaces';

interface Props {
  todos: Todo[];
  name: string;
}

// const TodoList: React.FC<Props> = ({ todos, name }) => {
function TodoList({ todos, name }: Props): JSX.Element {
  const [title, setTitle] = useState('');

  function renderTodos(): JSX.Element[] {
    return todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.title}</span>
        <span>icon</span>
      </li>
    ));
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(e.target.value);
  }

  return (
    <div>
      <div>{name}</div>
      <ul>{renderTodos()}</ul>
      <form action="">
        <input type="text" value={title} onChange={handleInput} />
      </form>
    </div>
  );
}

export default TodoList;
