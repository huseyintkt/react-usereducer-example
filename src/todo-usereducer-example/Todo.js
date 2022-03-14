import { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
};

const todoReducer = (todoState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todoState, action.payload];
    case ACTIONS.DELETE_TODO:
      return todoState.filter((todo) => todo.id !== action.payload);
    default:
      return todoState;
  }
};

const App = () => {
  const [todoState, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todoState.length + 1,
      name: name,
    };
    dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo });
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>

      <ul>
        {todoState.map((todo, index) => {
          return (
            <>
              <li key={index}>{todo.name}</li>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })
                }
              >
                Delete
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default App;
