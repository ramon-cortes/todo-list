function Todo({removeTodo, el, i}) {
  function handle() {
    removeTodo(i);
  }

  return (
    <div className="todo-item" key={i} id={i} onClick={handle}>(-) {el.text}</div>
  );
}