import './Specs.css';
import { GiCpu } from "react-icons/gi";
import { BsGpuCard } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


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
  storageOptionTypeSelected
}) {
  const [cpus, setCpus] = useState([]);
  const [cpuSearch, setCpuSearch] = useState("");
  useEffect(() => {
    fetch("/cpus_with_a10.json") // put file in /public/
      .then(res => res.json())
      .then(data => {
        if(cpuOptionSelected==="intel"){
          setCpus(data.intel)
        }else if(cpuOptionSelected==="amd"){
          setCpus(data.amd)
        }else if(cpuOptionSelected==="apple"){
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
        <h1>CPU:</h1>
        <div className='cpu-inputs'>
          <input type="text" placeholder='Enter CPU Name' value={cpuSearch} onChange={(e) => setCpuSearch(e.target.value)} />
          <div className="cpuoptionsSearched optionsSearched">
            {cpus.filter(cpu => cpu.toLowerCase().includes(cpuSearch.toLowerCase())).map((cpu, index) => (
              <div key={index} className="optionSearched"
              onClick={(e) => {setCpuSearch(e.target.textContent);}}
              >{cpu}</div>
            ))}
          </div>
          <select
            value={cpuOptionSelected}
            onChange={(e) => setCpuOptionSelected(e.target.value)}
          >
            <option value="intel" selected>Intel</option>
            <option value="amd">AMD</option>
            <option value="apple">Apple</option>
          </select>
        </div>
      </div>
      <div className="GPU">
        <h1>GPU:</h1>
        <div className='gpu-inputs'>
          <input type="text" placeholder='Enter GPU Name' />
          <div className="gpuoptionsSearched optionsSearched">
            <div className="optionSearched">Intel i3</div>
            <div className="optionSearched">Intel i3</div>
            <div className="optionSearched">Intel i3</div>
            <div className="optionSearched">Intel i3</div>
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
        <h1>RAM:</h1>
        <div className='ram-inputs'>
          <input type="number" placeholder='Enter RAM' />
          <select
            value={ramOptionUnitSelected}
            onChange={(e) => setOptionRamUnitSelected(e.target.value)}
          >
            <option value="gb" selected>GB</option>
            <option value="mb">MB</option>
          </select>
          <select
            value={ramOptionTypeSelected}
            onChange={(e) => setOptionRamTypeSelected(e.target.value)}
          >
            <option value="ddr3" selected>DDR3</option>
            <option value="ddr4">DDR4</option>
            <option value="ddr5">DDR5</option>
          </select>
        </div>
      </div>
      <div className="Storage">
        <h1>FREE Storage:</h1>
        <div className='storage-inputs'>
          <input type="number" placeholder='Enter Free Storage' />
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
export default Specs;
