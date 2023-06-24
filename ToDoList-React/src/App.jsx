import { useState } from "react"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

export default function App() {
  const [all, setAll] = useState([
    {
      id: 1,
      text: "Criar funciolidade X no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    }
  ])

  function addTodo (text, category) {
    const newTodo = [...all, {
      id: Math.floor(Math.random() * 1000000000),
      text,
      category,
      isCompleted: false
    }] 
    
    setAll(newTodo)
  }

  const removeTodo = (id) => {
    const newTodo = all.filter(todo => todo.id !== id)
    setAll(newTodo)
  }


  return (
    <div className="container text-center mt-5 bg-light p-3 rounded w-75">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {all.map((all) => (
          <Todo 
            key={all.id}
            text={all.text}
            category={all.category}
            removeTodo={() => removeTodo(all.id)}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}