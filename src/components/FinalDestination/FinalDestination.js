import React, { useEffect, useState } from 'react';
import './FinalDestination.css';
import Map from '../Map/Map'


const FinalDestination = (props) => {
  const [ride, setRide] = useState([]);

  useEffect(() => {
    fetch(`https://api.mocki.io/v1/a58662f8`)
      .then(res => res.json())
      .then(data => setRide(data[0]))
  }, [])
  const { id, title, rent, image } = ride;
  return (
    <div className=" container main-content">

      <div className="text" >
        <div className='divStyle'>
          <h4> Mirpur</h4>
          <h4> Gulshan </h4>
        </div>
        <div className="bike">
          <p><img className="images" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {title}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {rent}</span></p>
        </div>
        <div className="bike">
          <p><img className="images" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {title}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {rent}</span></p>
        </div>
        <div className="bike">
          <p><img className="images" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {title}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {rent}</span></p>
        </div>

      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
};

export default FinalDestination;