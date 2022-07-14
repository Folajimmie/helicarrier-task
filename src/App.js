import './App.css'
import React, {useEffect, useState} from "react";
import SpaceX from "./component/spaceX/SpaceX";
import Filter from './component/filter/Filter';


const LAUNCH_QUERY = `
query{
  countries{
    code
    name
    capital
    currency
    phone
    continent{
      code
      name
    } 
  }
}
`
function App() {

  const[launches, setLaunches] = useState([]);
  const[filtered, setFiltered] = useState([]);
  const [activeContinent, setActiveContinent] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  fetch('http://countries.trevorblades.com/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query: LAUNCH_QUERY})
  })
      .then(response => response.json())
      .then(data => setLaunches(data.data.countries))
    }, []); 
 


useEffect(() => {
  fetch('http://countries.trevorblades.com/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query: LAUNCH_QUERY})
  })
.then(response => response.json())
.then(data => setFiltered(data.data.countries))
}, []);

  return (
    <div className='container'>
      <Filter 
        launches={launches} 
        setFiltered={setFiltered} 
        activeContinent={activeContinent} 
        setActiveContinent={setActiveContinent}
      />
      <div className='search'>
        <input type="text" placeholder="Search Country..." onChange={event => {setSearchTerm(event.target.value)}}/>
      </div>
      <div className='main'>
        {launches.filter((launch) => {
          if(searchTerm == "") {
            return launch
          } else if(launch.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return launch
          }
        }).map((launch) => {
          return <SpaceX key={launch.code} launch={launch}/>;
        })}
      </div>
    </div>
  );
}

export default App;









