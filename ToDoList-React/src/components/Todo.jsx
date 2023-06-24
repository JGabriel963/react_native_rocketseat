export default function Todo({ text, category, removeTodo }) {
    return(
        <div className="card d-flex flex-sm-row mb-3 card-container bg-transparent">
            <div className="card-body text-start">
              <h5 className="card-title">{text}</h5>
              <p>({category})</p>
            </div>
            <div className="button p-4">
                <button className="btn btn-success m-1">Completar</button>
                <button className="btn btn-danger m-2" onClick={removeTodo}>X</button>
            </div>
        </div>
    )
}