import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../store/userAuthContext";

function NavBar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Abhinav Choudhary</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/addService"> Add Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout"> Logout </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
