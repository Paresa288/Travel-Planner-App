import { Link, NavLink } from "react-router";
import { useAuth } from "../../../contexts/auth";
import * as UsersApi from "../../../services/api-client";

function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await UsersApi.logout();
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary mb-2">
      <div className="container d-flex flex-row align-items-center">
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
        {!user && (
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            </ul>
          </div>
        )}
        {user && (
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item d-flex align-items-center"><button className="nav-link" onClick={handleLogout}><i className="fa fa-sign-out"></i>Logout</button></li>
              <li className="nav-item"><Link className="nav-link" to="/home"><img src={user.avatar} className="img-fluid rounded-circle" style={{ height: "4rem"}}></img></Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;