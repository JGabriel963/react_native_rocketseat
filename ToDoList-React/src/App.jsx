import { useState } from "react"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import Search from "./components/Search"
import Filter from "./components/Filter"

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

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

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

  const completeTodo = (id) => {
    const newTodo = [...all]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setAll(newTodo)
  }


  return (
    <div className="container text-center mt-5 mb-5 bg-light p-3 rounded w-50">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <hr />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <hr />
      <div className="todo-list">
        {all
          .filter((all) => 
            filter === "All"
            ? true
            : filter === "Completed"
            ? all.isCompleted
            : !all.isCompleted)
          .filter((all) => all.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((all) => (
          <Todo 
            key={all.id}
            text={all.text}
            category={all.category}
            removeTodo={() => removeTodo(all.id)}
            completTodo={() => completeTodo(all.id)}
            isComplete={all.isCompleted}
          />
        ))}
        {all.length === 0 || all.filter((item) => item.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).length === 0 && (
          <h2>Nenhum resultado</h2>
        )}
      </div>
      <hr />
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}