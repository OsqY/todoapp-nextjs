'use client'
import { completeTodo } from "@/utils/actions"
import { useTransition } from "react"


const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div onClick={() => startTransition(() => completeTodo(todo.id))}
      className={`mb-4 mx-32 shadow-black border border-black bg-yellow-100 p-4 cursor-pointer ${todo.completed ? 'line-through text-green-700' : 'text-red-700'} `
      }>
      {todo.content}
    </div >
  )
}

export default Todo
