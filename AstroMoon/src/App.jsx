import { useState, useEffect } from 'react'

import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY
import {Link} from "react-router-dom"

import Chart from './Components/Chart'
import LineChart from './Components/LineChart'

function App() {
  
  const [list, setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [maxLifespan, setMaxLifespan] = useState(25); 

  useEffect(() => {
   const fetchAllWeatherData = async() => {
    const response = await fetch (
      `https://api.thecatapi.com/v1/breeds?&key=${API_KEY}`
    )
    const json = await response.json()
    setList(json)
    console.log("Loaded", json)
   }
   fetchAllWeatherData().catch(console.error)
  }, [])


  const searchItems = (searchValue) => {
    if (searchValue.trim() !== "") {
      const filteredData = list.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };
  

  const getMaxLifespan = () => {
    const lifespans = list
      .map((cat) => {
        const end = parseInt(cat.life_span?.split("-")[1]) || parseInt(cat.life_span);
        return isNaN(end) ? 0 : end;
      });
    return Math.max(...lifespans);
  };
  
  

  return (
  
  <div className='main'>
  <div className='nav'>
  <h2>FriendlyCat 🐈 </h2>
  <li><a href = "app.jsx">Dashboard</a></li>
  <li><a href = "app.jsx">Search</a></li>
  <li><a href = "app.jsx">About</a></li>
  </div>

  <div className = 'bodyArea'>
    {list && list[0] && (
       <div className='first-box'>
    <div className='container1'>
      <h1> Name: 
        {list[0].name}
      <img
      src={`https://cdn2.thecatapi.com/images/${list[0].reference_image_id}.jpg`}
      alt={list[0].name}
      style={{ width: "30px", height: "auto", borderRadius: "8px" }}
    />
     </h1>
      </div>
    <div className='container2'>
      <h1> Origin: {list && list[0]?.origin}</h1>
      </div>
    <div className='container3'>
    <h1> Highest Lifespan: {getMaxLifespan()} years</h1>
    </div>
    </div>
    )}

  <div className='searchbar'>

<label htmlFor="wSearch"></label>
<input type="text" id="wSearch" name="wSearch" placeholder='Enter the place' onChange={(e) => setSearchInput(e.target.value)}/>



<button onClick={() => searchItems(searchInput)}>Search</button>

<div className="slidecontainer">
  <label>Show friendly cats with lifespan up to: {maxLifespan} years</label>
  <input
    type="range"
    min="1"
    max="25"
    value={maxLifespan}
    onChange={(e) => setMaxLifespan(Number(e.target.value))}
  />
</div>

<table>
  <thead>
  <tr>
  <th>Name</th>
  <th>Country</th>
  <th>LifeSpan</th>
  </tr>
  </thead>
  <tbody>
  {(filteredResults.length > 0 ? filteredResults : list)
    .filter((cat) => {
      const lifespanStart = parseInt(cat.life_span);
      const lifespanEnd = parseInt(cat.life_span.split("-")[1]) || lifespanStart;
      return lifespanEnd <= maxLifespan;
    })
    .map((cat) => (

      <tr key={cat.id}>

<Link
  to={`/WeatherInfo/${cat.id}`}
>
<td>{cat.name}</td>
</Link>
<td>{cat.origin}</td>
        <td>{cat.life_span}</td>
      </tr>
    ))}
</tbody>


  </table>


  </div>
<br></br>
  </div>
  <div className='charts'>
  <Chart data={list} />
  <LineChart data={list}/>
</div>
  </div>

)}

export default App
