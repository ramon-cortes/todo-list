function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      completed: false
    },
    {
      text: 'meet friend for lunch',
      completed: false
    },
    {
      text: 'build todo app',
      completed: false
    }
  ]);
  //console.log(todos[0].text);

const addTodo = value => {
  const newTodos = [...todos, {text: value, completed: false}];
  setTodos(newTodos);
}


  const removeTodo = i => {
    let newTodos = [...todos];
    //console.log(e.target.id);
    //console.log(newTodos);
    newTodos.splice(i, 1);
    setTodos(newTodos);
    //console.log(newTodos);
  }

  return (
    <div className="app">
      <div className="form">
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="list">
        {todos.map((el, i) => <Todo key={i} el={el} i={i} removeTodo={removeTodo} />)}
      </div>
    </div>);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);