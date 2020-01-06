import React from 'react';
import {Plugins} from '@capacitor/core';
import {useState, useEffect} from 'react';
import {db} from './Firebase';



const Maps = () => {

const [lat, setLat] = useState(0);
const [long, setLong] = useState(0);
const [count, setCount] = useState (0);


const Location = () => {


      Plugins.Geolocation.getCurrentPosition({enableHighAccuracy: true}).then(
        result => setLat ( result.coords.latitude)
      )

      Plugins.Geolocation.getCurrentPosition({enableHighAccuracy: true}).then(
        result => setLong (result.coords.longitude)
      )

      
}

const interval = () => {
  setInterval (() =>
  {
    Location();
    setCount(prevCount => prevCount + 1)
  }, 30000 );
}


useEffect(() => { 
  if (lat && long > 0) 
  {db.collection("Location").doc("Team Six").set({
        Latitude: lat,
        Longitude: long,
        Team: "Team Six"
      })
} else {
   console.log("Not updated")
}}, [count]
);




    return (
        <div>
          <div>
            <button onClick = {interval}>
              Get Location
            </button>
             </div>
            <div>
               {long}
            </div>
              <div>
                {lat}
              </div>
        </div>
    )
}


export default Maps;



// const Location2 = () => {
//   Plugins.Geolocation.watchPosition({maximumAge: 30000}, (position) => {
//     if (position) {
//     setLat (position.coords.latitude)
//     setLong (position.coords.longitude)
//     }
//   })
// }



