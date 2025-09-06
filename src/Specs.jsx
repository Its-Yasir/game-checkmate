import './Specs.css';
import { GiCpu } from "react-icons/gi";
import { BsGpuCard } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
export default Specs;


function Specs({
  cpuOptionSelected,
  gpuOptionSelected,
  ramOptionUnitSelected,
  ramOptionTypeSelected,
  storageOptionUnitSelected,
  setCpuOptionSelected,
  setGpuOptionSelected,
  setOptionRamUnitSelected,
  setOptionRamTypeSelected,
  setStorageOptionUnitSelected,
  setStorageOptionTypeSelected,
  storageOptionTypeSelected,
  setCpuSpecs,
  setGpuSpecs,
  ramSpecs,
  setRamSpecs,
  storageSpecs,
  setStorageSpecs,
  allSpecs,
  setAllSpecs
}) {
  //! ALL VARIABLES DECLARED
  const [cpus, setCpus] = useState([]);
  const [cpuSearch, setCpuSearch] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);
  const [gpus, setGpus] = useState([]);
  const [gpuSearch, setGpuSearch] = useState("");

  console.log(allSpecs);

  const handleInputFocus = () => setIsListVisible(true);
  // Use onMouseDown to prevent blur when clicking an option
  const handleListMouseDown = (e) => e.preventDefault();

  function proceedToNextPage() {
    const ramEl = document.querySelector('.RAM h1');
    const storageEl = document.querySelector('.Storage h1');
    const cpuEl = document.querySelector('.CPU h1');
    const gpuEl = document.querySelector('.GPU h1');

    if (ramEl && storageEl && cpuEl && gpuEl) {
      let ramString = ramEl.textContent;
      let storageString = storageEl.textContent;
      let cpuString = cpuEl.textContent;
      let gpuString = gpuEl.textContent;

      if (ramString.length > 4 && storageString.length > 13 && cpuString.length > 4 && gpuString.length > 4) {
        console.log("All specifications are valid.");
      }
    }
  }
  proceedToNextPage();

  useEffect(() => {
    fetch("/gpus_full.json") // put file in /public/
      .then(res => res.json())
      .then(data => {
        if (gpuOptionSelected === "nvidia") {
          setGpus(data.nvidia)
        } else if (gpuOptionSelected === "amd") {
          setGpus(data.amd)
        } else if (gpuOptionSelected === "intel") {
          setGpus(data.intel)
        } else if (gpuOptionSelected === "asus") {
          setGpus(data.asus)
        }
      });
  }, [gpuOptionSelected]);

  useEffect(() => {
    fetch("/cpus_with_a10.json") // put file in /public/
      .then(res => res.json())
      .then(data => {
        if (cpuOptionSelected === "intel") {
          setCpus(data.intel)
        } else if (cpuOptionSelected === "amd") {
          setCpus(data.amd)
        } else if (cpuOptionSelected === "apple") {
          setCpus(data.apple)
        }
      });
  }, [cpuOptionSelected]);

  return (
    <div className="specs-container">
      <h1>
        <GiCpu />
        Add PC Specifications
        <BsGpuCard />
      </h1>
      <div className="CPU">
        <h1>{'CPU:' + (allSpecs && allSpecs.cpu ? ` ${allSpecs.cpu}` : '')}</h1>
        <div className='cpu-inputs'>
          <input type="text" placeholder='Enter CPU Name' value={cpuSearch}
            onChange={(e) => setCpuSearch(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={() => setIsListVisible(false)
            }
          />
          <div className="cpuoptionsSearched optionsSearched"
            onMouseDown={handleListMouseDown}>
            {cpus.filter(cpu => cpu.toLowerCase().includes(cpuSearch.toLowerCase())).map((cpu, index) => (
              <div
                key={index}
                className="optionSearched"
                onClick={() => {
                  console.log(isListVisible);
                  setCpuSpecs(cpu);
                  setCpuSearch('');
                  setIsListVisible(false);
                  setAllSpecs(prev => ({
                    ...prev,
                    cpu
                  }));
                }}
              >
                {cpu}
              </div>
            ))}
          </div>
          <select
            value={cpuOptionSelected}
            onChange={(e) => setCpuOptionSelected(e.target.value)}
            defaultValue="intel"
          >
            <option value="intel">Intel</option>
            <option value="amd">AMD</option>
            <option value="apple">Apple</option>
          </select>
        </div>
      </div>
      <div className="GPU">
        <h1>{'GPU:' + (allSpecs && allSpecs.gpu ? ` ${allSpecs.gpu}` : '')}</h1>
        <div className='gpu-inputs'>
          <input type="text" placeholder='Enter GPU Name' value={gpuSearch}
            onChange={(e) => setGpuSearch(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={() => setIsListVisible(false)}
          />
          <div className="gpuoptionsSearched optionsSearched"
            onMouseDown={handleListMouseDown}>
            {gpus.filter(gpu => gpu.toLowerCase().includes(gpuSearch.toLowerCase())).map((gpu, index) => (
              <div
                key={index}
                className="optionSearched"
                onClick={() => {
                  console.log(isListVisible);
                  setGpuSpecs(gpu);
                  setGpuSearch('');
                  setIsListVisible(false);
                  allSpecs.gpu = gpu;
                }}
              >
                {gpu}
              </div>
            ))}
          </div>
          <select
            value={gpuOptionSelected}
            onChange={(e) => setGpuOptionSelected(e.target.value)}
          >
            <option value="nvidia" selected>NVIDIA</option>
            <option value="intel">Intel</option>
            <option value="amd">AMD</option>
            <option value="asus">ASUS</option>
          </select>
        </div>
      </div>
      <div className="RAM">
        <h1>{'RAM:' + ramSpecs}</h1>
        <div className='ram-inputs'>
          <input type="number" placeholder='Enter RAM'
            onChange={(e) => setRamSpecs(`${e.target.value} ${ramOptionUnitSelected} ${ramOptionTypeSelected}`.toUpperCase())}
          />
          <select
            value={ramOptionUnitSelected}
            onChange={(e) => setOptionRamUnitSelected(e.target.value)}
          >
            <option value="GB" selected>GB</option>
            <option value="MB">MB</option>
          </select>
          <select
            value={ramOptionTypeSelected}
            onChange={(e) => setOptionRamTypeSelected(e.target.value)}
          >
            <option value="DDR3" selected>DDR3</option>
            <option value="DDR4">DDR4</option>
            <option value="DDR5">DDR5</option>
          </select>
        </div>
      </div>
      <div className="Storage">
        <h1>{'FREE Storage: ' + storageSpecs}</h1>
        <div className='storage-inputs'>
          <input type="number" placeholder='Enter Free Storage'
            onChange={(e) => setStorageSpecs(` ${e.target.value} ${storageOptionUnitSelected} ${storageOptionTypeSelected}`.toUpperCase())}
          />
          <select
            value={storageOptionUnitSelected}
            onChange={(e) => setStorageOptionUnitSelected(e.target.value)}
          >
            <option value="gb" selected>GB</option>
            <option value="mb">MB</option>
          </select>
          <select
            value={storageOptionTypeSelected}
            onChange={(e) => setStorageOptionTypeSelected(e.target.value)}
          >
            <option value="hdd" selected>HDD</option>
            <option value="ssd">SSD</option>
          </select>
        </div>
      </div>
      <div className="buttons">
        <Link to={"/"}>
          <button className="go-back">
            <IoArrowBack className='icon' />
            Go Back
          </button>
        </Link>
        <Link to={"/get-started"}>
          <button className="add-specs">Add Specs
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

