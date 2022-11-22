function TodoForm({addTodo}) {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {    
    e.preventDefault(); //Evita que se haga refresh de la página
    //console.log(e.target);
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value = {value}
        placeholder="Add Todo here"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
