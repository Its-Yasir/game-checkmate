import './App.css';
import ClickSpark from './components/reactbits/ClickSpark';
import Specs from './Specs';
import Particles from './components/reactbits/Particles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import GeminiGenerator from './GeminiGenerator';
import { useState, useEffect } from 'react';
import { Main } from './components/main/Main'

function App() {

  const [cpuOptionSelected, setCpuOptionSelected] = useState('intel');
  const [gpuOptionSelected, setGpuOptionSelected] = useState('nvidia');
  const [ramOptionUnitSelected, setOptionRamUnitSelected] = useState('gb');
  const [ramOptionTypeSelected, setOptionRamTypeSelected] = useState('ddr3');
  const [storageOptionUnitSelected, setStorageOptionUnitSelected] = useState('gb');
  const [storageOptionTypeSelected, setStorageOptionTypeSelected] = useState('hdd');
  const [cpuSpecs, setCpuSpecs] = useState('');
  const [gpuSpecs, setGpuSpecs] = useState('');
  const [ramSpecs, setRamSpecs] = useState('');
  const [storageSpecs, setStorageSpecs] = useState('');

  const [allSpecs, setAllSpecs] = useState({
    cpu: "",
    gpu: "",
    ram: {
      type:'DDR3',
      data:'GB',
      number: 0
    },
    storage: {
      type:'HDD',
      data:'GB',
      number: 0
    },
  });

  // Load from localStorage once at app start
  useEffect(() => {
    const saved = localStorage.getItem("allSpecs");
    if (saved) {
      setAllSpecs(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever allSpecs changes
  useEffect(() => {
    localStorage.setItem("allSpecs", JSON.stringify(allSpecs));
  }, [allSpecs]);




  return (
    <Router>
      <Routes>
        {/* Home route with background and clickspark */}
        <Route
          path="/"
          element={
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
              {/* Background Particles */}
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />

              {/* Foreground content with ClickSpark */}
              <ClickSpark
                sparkColor="#26bbff"
                sparkSize={20}
                sparkRadius={25}
                sparkCount={10}
                duration={400}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Home />
                </div>
              </ClickSpark>
            </div>
          }
        />
        <Route
          path="/specs"
          element={
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
              {/* Background Particles */}
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />

              {/* Foreground content with ClickSpark */}
              <ClickSpark
                sparkColor="#26bbff"
                sparkSize={20}
                sparkRadius={25}
                sparkCount={10}
                duration={400}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Specs
                    cpuOptionSelected={cpuOptionSelected}
                    setCpuOptionSelected={setCpuOptionSelected}
                    gpuOptionSelected={gpuOptionSelected}
                    setGpuOptionSelected={setGpuOptionSelected}
                    ramOptionUnitSelected={ramOptionUnitSelected}
                    setOptionRamUnitSelected={setOptionRamUnitSelected}
                    ramOptionTypeSelected={ramOptionTypeSelected}
                    setOptionRamTypeSelected={setOptionRamTypeSelected}
                    storageOptionUnitSelected={storageOptionUnitSelected}
                    setStorageOptionUnitSelected={setStorageOptionUnitSelected}
                    storageOptionTypeSelected={storageOptionTypeSelected}
                    setStorageOptionTypeSelected={setStorageOptionTypeSelected}
                    cpuSpecs={cpuSpecs}
                    setCpuSpecs={setCpuSpecs}
                    gpuSpecs={gpuSpecs}
                    setGpuSpecs={setGpuSpecs}
                    ramSpecs={ramSpecs}
                    setRamSpecs={setRamSpecs}
                    storageSpecs={storageSpecs}
                    setStorageSpecs={setStorageSpecs}
                    allSpecs={allSpecs}
                    setAllSpecs={setAllSpecs}
                  />
                </div>
              </ClickSpark>
            </div>
          }
        />
        <Route
          path="/get-started"
          element={
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
              {/* Background Particles */}
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />

              {/* Foreground content with ClickSpark */}
              <ClickSpark
                sparkColor="#26bbff"
                sparkSize={20}
                sparkRadius={25}
                sparkCount={10}
                duration={400}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Main
                    allSpecs={allSpecs}
                    ramSpecs={ramSpecs}
                    storageSpecs={storageSpecs}
                  />
                </div>
              </ClickSpark>
            </div>
          }
        />

        {/* Gemini route */}
        <Route path="/generate" element={<GeminiGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
