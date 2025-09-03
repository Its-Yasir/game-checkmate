import Particles from "./components/reactbits/Particles";
import Nav from "./components/home/Nav";
import MainHome from "./components/home/MainHome";
import './Home.css'


export function Home() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      
      {/* Your actual content on top */}
      <div className="actual-content" style={{ position: "relative", zIndex: 1}}>
        <Nav />
        <MainHome />
      </div>
    </div>
  );
}
