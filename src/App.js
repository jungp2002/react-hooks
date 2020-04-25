import React, {useState} from 'react';

/**
 * todo - external data
 * index - external index
 * completeTodo - external function
 */
function Todo({todo, index, completeTodo, removeTodo}) {
  /**
   * For style use double curly braces
   */
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through': ''}} className="todo">{todo.text}
      <button onClick={()=> completeTodo(index)}>Complete</button>
      <button onClick={()=> removeTodo(index)}>Remove</button>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return;
    } else {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={ e=> setValue(e.target.value) }/>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Learn about Angular',
      isCompleted: false
    },
    {
      text: 'Learn about Vue',
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]; /** new state is original plus new object */
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
 
  return (
    <div className="todoList">
      {todos.map( (todo, index) => (
        <Todo 
          key={index} 
          index={index} 
          todo={todo} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo}></Todo>
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App;