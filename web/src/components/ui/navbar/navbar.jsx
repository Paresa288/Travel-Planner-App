import { Link, NavLink } from "react-router" 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary mb-2">
      <div className="container">
        <Link className="navbar-brand" to="/">Travel Planner</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#main-navbar" 
          aria-controls="main-navbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mb-2 ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;