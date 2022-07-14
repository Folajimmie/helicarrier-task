import React from 'react'
import './spacex.css'

function SpaceX ({launch}) {
  return (
    <div className='space-card'>
      <div className='text'>  <div> <h4>Country:</h4></div> <div> {launch.name}</div> </div>
      <div className='text'>  <div> <h4>Code:</h4></div> <div> {launch.code}</div> </div>
      <div className='text'>  <div> <h4>Capital:</h4></div> <div> {launch.capital}</div> </div>
      <div className='text'>  <div> <h4>Currency:</h4></div> <div> {launch.currency}</div> </div>
      <div className='text'>  <div> <h4>Phone code:</h4></div> <div> +{launch.phone}</div> </div>

    </div>
  );
}
export default SpaceX;