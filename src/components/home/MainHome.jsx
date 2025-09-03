import GradientText from '../reactbits/GradientText';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import Stack from '../reactbits/Stack';
import './MainHome.css'

function MainHome() {
  const images = [
    { id: 2, img: "./AC4.png" },
    { id: 3, img: "MADMAX.png" },
    { id: 4, img: "./DYINGLIGHT.png" },
    { id: 5, img: "MINECRAFT.png" },
    { id: 6, img: "NFSMOSTWANTED.png" },
    { id: 7, img: "FC3.png" },
    { id: 1, img: "./AC3.png" }
  ];
  // Calculate card dimensions based on window width
  const getCardDimensions = () => {
    const baseWidth = 300;
    const baseHeight = 400;
    if (window.innerWidth < 900) {
      const width = 250;
      const height = Math.round((width / baseWidth) * baseHeight);
      return { width, height };
    }
    return { width: baseWidth, height: baseHeight };
  };

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
        <Link to={"/specs"}>
          <button className="add-pc-specs">Add PC Specs
            <GoArrowUpRight className="icon-up-right" />
          </button>
        </Link>
      </div>
      <div className="right">
        <Stack
          randomRotation={true}
          sensitivity={100}
          sendToBackOnClick={false}
          cardDimensions={getCardDimensions()}
          cardsData={images}
        />
      </div>
    </div>
  );
}
export default MainHome;
