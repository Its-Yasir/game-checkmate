import GradientText from '../reactbits/GradientText'
import Carousel from '../reactbits/Carousel'
import { GoArrowUpRight } from 'react-icons/go';
import './MainHome.css'

function MainHome() {
  return (
    <div className="main-home">
      <div className="left">
        <span>Welcome To</span>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={7}
          showBorder={false}
          className="custom-class"
        >
          Games Checkmate
        </GradientText>
        <h3>Tell us Your PC Specs and we will tell you games that can smoothly run on it</h3>
        <button className="get-started">Get Started</button>
        <button className="add-pc-specs">Add PC Specs
          <GoArrowUpRight className="icon-up-right" />
        </button>
      </div>
      <div className="right"></div>
    </div>
  );
}
export default MainHome;
