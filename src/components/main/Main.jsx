import Nav from "../home/Nav";
import './Main.css'
import { Search } from "./Search";
import GlitchText from '../reactbits/GlitchText'

export function Main({
  allSpecs,
  ramSpecs,
  storageSpecs

}) {

  console.log(allSpecs.cpu);
  console.log(allSpecs.gpu);
  console.log(ramSpecs);
  console.log(storageSpecs)
  return (
    <main>
      <Nav />
      <Search />
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={false}
        className='custom-class'
      >
        React Bits
      </GlitchText>
    </main>
  );
}