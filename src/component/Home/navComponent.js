import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import SearchComponent from "../search/searchComponent";

export default function NavComponent() {
const counter = useSelector((state)=>state.cart.counter)
// console.log(counter);


  const history = useHistory();
  const location = useLocation();

  const handelSubmitionForm = () => {
    history.push("/search");
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/fav" ? "active" : ""
                }`}
                to="/fav"
              >
                My Favourites  
              </Link>
            </li>
          </ul>
          <form className="form-inline my-0 my-lg-0">
          <i
          style={{
            marginTop:"0%",  
            right:0,
            fontSize:"40px",
            color:"#FFD700",
            cursor: "pointer",
            marginRight:"3%"
          }}
          className={`bi bi-star${counter === 0?'':'-fill'}`}>
          </i>
            {/* <SearchComponent /> */}
            </form>
            <div className="form-inline mx-2  my-2 my-lg-0">
              <i
              style={{
                marginTop:"0%",  
                right:0,
                fontSize:"35px",
                color:"#FFD700",
                cursor: "pointer",
                marginRight:"3%",
              }}
              > {counter}</i>
            </div>
        </div>
      </div>
    </nav>
  );
}
