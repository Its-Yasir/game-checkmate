import { GoArrowUpRight } from "react-icons/go";
import './nav.css'

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
        <h3>Games Checkmate</h3>
      </div>
      <button className="add-pc-specs">Add PC Specs
        <GoArrowUpRight className="icon-up-right" />
      </button>
    </nav>
  );
}

export default Nav;