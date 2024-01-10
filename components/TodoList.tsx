import Todo from "./Todo"

const TodoList = ({ todos }) => {
  return (
    <div className="my-4">
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
