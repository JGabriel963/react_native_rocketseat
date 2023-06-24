export default function Search({search, setSearch}) {
    return (
        <div className="text-start mb-3">
            <h2>Pesquisar:</h2>
            <div className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                    <input 
                        type="search" 
                        value={search}
                        className="form-control me-2" placeholder="Digite para pesquisar" aria-label="Search"
                        onChange={(ev) => setSearch(ev.target.value)} 
                    />
                    <button className="btn btn-outline-success" type="submit" onClick={(ev) => ev.preventDefault()}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}