import { useState } from "react"

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if(!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

    return (
        <div className="text-start">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Digite o título"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}  
                    />
                    <label htmlFor="floatingInput">Digite o título</label>
                </div>
                <select 
                    class="form-select form-select-lg mb-3 shadow-none" aria-label=".form-select-lg example"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option selected>Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button className="btn btn-outline-secondary btn-lg">Criar</button>
            </form>
        </div>
    )
}