export default function Filter() {
    return (
        <div className="text-start">
            <h2>Filtrar</h2>
            <div className="d-flex flex-sm-row mb-3 justify-content-around row">
                <div className="col">
                    <p>Status:</p>
                    <select class="form-select" aria-label="Default select example" >
                        <option value="All" selected>Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompletd">Incompletas</option>
                    </select>
                </div>
                <div className="col">
                    <p>Ordem alfabética:</p>
                    <div  class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Asc</button>
                        <button type="button" class="btn btn-primary">Desc</button>
                    </div>
                </div>
            </div>
        </div>
    )
}