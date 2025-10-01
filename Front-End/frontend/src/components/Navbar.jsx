function Navbar({intro, view, fetchBooks, setAddView}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Book Club</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <button className={`nav-link ${view === "welcome" ? "active" : ""}`} onClick={intro}>Home</button>
            </li>
    
            <li className="nav-item mx-3">
              <button className={`nav-link ${view === "books" ? "active" : ""}`} onClick={fetchBooks}>Get Books</button>
            </li>

            <li className="nav-item mx-3">
              <button className="nav-link" onClick={setAddView}>Add Books</button>
            </li>

            <li className="nav-item mx-3">
              <button className="nav-link">About</button>
            </li>

          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Books"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    


  );
}

export default Navbar;
