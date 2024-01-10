import { newTodo } from "@/utils/actions"

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="bg-gray-300 border-black" />
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default NewTodoForm
