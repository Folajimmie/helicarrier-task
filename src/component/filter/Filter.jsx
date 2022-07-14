// import { useEffect } from "react";
import React, { useEffect } from "react";
import './Filter.css';

function Filter({setActiveContinent, activeContinent, setFiltered, launches}){
   
    // useEffect(() =>{
    //     if(activeContinent === "All"){
    //         setFiltered(launches);
    //         return;
    //     }
    //     const filtered = launches.filter((launch) => launch.continent.code.include(activeContinent));
    //     setFiltered(filtered);
    // }, [ activeContinent]);

    return(
        <div className="filter-container">
            <button onClick={() => setActiveContinent("All")}>All</button>
            <button onClick={() => setActiveContinent("AF")}>Africa</button>
            <button onClick={() => setActiveContinent("AS")}>Asia</button>
            <button onClick={() => setActiveContinent("AN")}>Antarctica</button>
            <button onClick={() => setActiveContinent("OC")}>Oceania</button>
            <button onClick={() => setActiveContinent("EU")}>Europe</button>
            <button onClick={() => setActiveContinent("NA")}>North-Amenrica</button>
            <button onClick={() => setActiveContinent("SA")}>South-Amenrica</button>
        </div>
    )
}

export default Filter;