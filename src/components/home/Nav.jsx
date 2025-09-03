import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import './nav.css'

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
        <h3>Games Checkmate</h3>
      </div>
      <Link to={"/specs"}>
        <button className="add-pc-specs">Add PC Specs
          <GoArrowUpRight className="icon-up-right" />
        </button>
      </Link>
    </nav>
  );
}

export default Nav;