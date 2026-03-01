// import React, { useState } from "react";
// import axios from "axios";

// const AddParkingPage = () => {
//   const [parkingData, setParkingData] = useState({
//     name: "",
//     lat: 51.505,
//     lng: -0.09,
//     price: 10,
//     availableSpaces: 5,
//   });

//   const handleAddParking = async () => {
//     try {
//       const response = await axios.post("/api/owner/add-parking", parkingData);
//       if (response.data.success) {
//         alert("Parking added successfully");
//       } else {
//         alert("Failed to add parking");
//       }
//     } catch (error) {
//       console.error("Error adding parking", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Parking Lot</h2>
//       <input
//         type="text"
//         placeholder="Parking Name"
//         value={parkingData.name}
//         onChange={(e) => setParkingData({ ...parkingData, name: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Price per hour"
//         value={parkingData.price}
//         onChange={(e) => setParkingData({ ...parkingData, price: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Available Spaces"
//         value={parkingData.availableSpaces}
//         onChange={(e) => setParkingData({ ...parkingData, availableSpaces: e.target.value })}
//       />
//       <button onClick={handleAddParking}>Add Parking</button>
//     </div>
//   );
// };

// export default AddParkingPage;
import './AddParkingPage.css';

function AddParkingPage() {
  return (
    <div className="container">
    <h1>Online Parking</h1>
    <h2>Registration Form</h2>
    
    <form>
        <label htmlFor="owner">Vehicle Owner Name:</label>
        <input type="text" id="owner" name="owner" required />
        
        <label htmlFor="vehicle">Vehicle Name:</label>
        <input type="text" id="vehicle" name="vehicle" required />

        <label htmlFor="number">Vehicle Number:</label>
        <input type="text" id="number" name="number" required />

        <label htmlFor="entry">Entry Date:</label>
        <input type="date" id="entry" name="entry" required />

        <label htmlFor="exit">Exit Date:</label>
        <input type="date" id="exit" name="exit" required />

        <label for="entry-time">Entry Time:</label>
        <input type="time" id="entry-time" name="entry-time" required/>

        <label for="exit-time">Exit Time:</label>
        <input type="time" id="exit-time" name="exit-time" required/>

        <button type="submit">Submit</button>
    </form>
</div>
);

}

export default AddParkingPage;                                                                                                                      /* .container {
    width: 40%;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}

h1, h2 {
    color: #002244;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    font-size: 16px;
    margin: 10px 0 5px;
    display: block;
}

input {
    width: 80%;
    padding: 8px;
    margin: 5px 0 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 50%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
} */

body {
    font-family: Arial, sans-serif;
    background-image: url(https://images.unsplash.com/photo-1687834367237-66e930dd712c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D); /* Add a suitable parking lot background image */
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
}

.container {
    width: 600px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}

h1, h2 {
    color: #002244;
}

.container form {
    display: flex;
    flex-direction: column;
    text-align: left;

    align-items: center;
}
    

.container label {
    font-size: 16px;
    margin: 10px 0 5px;
    display: block;
}

.container input {
    width: 80%;
    padding: 8px;
    margin: 5px 0 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

 button {
    width: 50%;
    padding: 10px;
    background-color: #15191e;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}                                                                                                                                                                        addparking- topic of one file                                                                                                                        import React, { useState } from "react";
import axios from "axios";
import './OwnerLoginPage.css';

const OwnerLoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/owner/login", { username, password });
      if (response.data.success) {
        onLoginSuccess(response.data.owner);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="pura">
      <h2>Owner Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default OwnerLoginPage;                                                                                                                    .pura{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
  }


  .pura input {
    margin: 10px 0;
    padding: 10px;
    width: 250px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .pura button {
    margin-top: 90px;
    padding: 10px 20px;
    font-size: 16px;
    width: 150px;
  
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .pura button:hover {
    background-color: #45a049;
  }                                                                                                                                                         ownerloginpage -topic name of file                                                                                                                     import { useEffect,useState } from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"



function Navbar(props)
{
    
    return <div className="navbar">
        <h1 className="logo">{props.name}</h1>
        <div className="nav-links">
            <Link to="/owner/add-parking" className="nav-link">Add Parking</Link>
            <Link to="/owner/login" className="nav-link">owner login</Link>
            <Link to="/user/login" className="nav-link">user login</Link>
            <Link to="/user/parking" className="nav-link">parking search</Link>
        </div>
       
        
    </div>
}
 export default Navbar;                                                                                                                                              .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: #1f1f1f;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
  }
  
  .nav-link {
    font-weight: 500;
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #4A90E2;
  }
  
  .search-container {
    position: relative;
  }
  
  .search-box {
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    transition: border 0.3s ease-in-out;
  }
  
  .search-box:focus {
    border: 2px solid #4A90E2;
  }
  
  .dropdown {
    position: absolute;
    top: 40px;
    width: 100%;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  
  .dropdown-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    color: #333;
    transition: background 0.3s ease;
  }
  
  .dropdown-item:hover {
    background: #f4f4f4;
  }                                                                                                                                                                navbar-topic                                                                                                                                                               import React, { useState } from "react";
import axios from "axios";
import './LoginPage.css';


const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user/login", { username, password });
      if (response.data.success) {
        onLoginSuccess(response.data.user);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="pura">
      <h2>Login</h2>
      <input
        className="login"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    
  );
};

export default LoginPage;                                                                                                                                     /*Ensure the entire body takes full height
body, html {
    height: 100%;
    margin: 0;
  }
  
  /* Flexbox to center the .pura div */
  /* .pura {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    /* background-color: #f4f4f4; Optional, you can change the background color 
  }  */
  

  /* .pura input {
    margin: 10px 0;
    padding: 10px;
    width: 250px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .pura button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
  
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  

  .pura button:hover {
    background-color: #45a049;
  } */
  
  /* Optional: Add a title style */
  /* .pura h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }/* */

  .pura{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
  }


  .pura input {
    margin: 10px 0;
    padding: 10px;
    width: 250px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .pura button {
    margin-top: 90px;
    padding: 10px 20px;
    font-size: 16px;
    width: 150px;
  
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .pura button:hover {
    background-color: #45a049;
  }                                                                                                                                                                         // import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const ParkingSearchPage = () => {
//   const [parkingOptions, setParkingOptions] = useState([]);
//   const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 }); 

//   // Fetch user location
//   const location = useLocation();

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       });
//     }
//   }, []);

//   useEffect(() => {
//     // Fetch nearby parking options based on the user's location
//     const fetchParkingOptions = async () => {
//       const { lat, lng } = userLocation;
//       const response = await axios.get("/api/parking", { params: { lat, lng } });
//       setParkingOptions(response.data);
//     };

//     fetchParkingOptions();
//   }, [userLocation]);

//   return (
//     <div>
//       <h2>Nearby Parking Spots</h2>
//       <MapContainer center={userLocation} zoom={13} style={{ height: "400px" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {parkingOptions.map((parking) => (
//           <Marker key={parking.id} position={[parking.lat, parking.lng]}>
//             <Popup>
//               <div>
//                 <h3>{parking.name}</h3>
//                 <p>Price: ${parking.price}</p>
//                 <p>Available Spaces: {parking.availableSpaces}</p>
//                 <button onClick={() => alert("Booking this spot")}>Book Now</button>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default ParkingSearchPage;

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ParkingSearchPage = () => {
  const [parkingOptions, setParkingOptions] = useState([]); // Make sure it's an array
  const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 }); 

  // Fetch user location (optional, if you need user's location)
  const location = useLocation();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    // Fetch nearby parking options based on the user's location
    const fetchParkingOptions = async () => {
      const { lat, lng } = userLocation;

      try {
        const response = await axios.get("/api/parking", { params: { lat, lng } });

        // Ensure that response.data is an array
        if (Array.isArray(response.data)) {
          setParkingOptions(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setParkingOptions([]); // Fallback to empty array if the data is not in the expected format
        }
      } catch (error) {
        console.error("Error fetching parking options:", error);
        setParkingOptions([]); // Fallback to empty array on error
      }
    };

    fetchParkingOptions();
  }, [userLocation]);

  return (
    <div>
      <h2>Nearby Parking Spots</h2>
      <MapContainer center={userLocation} zoom={13} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {/* Ensure parkingOptions is an array before calling map */}
        {Array.isArray(parkingOptions) && parkingOptions.length > 0 ? (
          parkingOptions.map((parking) => (
            <Marker key={parking.id} position={[parking.lat, parking.lng]}>
              <Popup>
                <div>
                  <h3>{parking.name}</h3>
                  <p>Price: ${parking.price}</p>
                  <p>Available Spaces: {parking.availableSpaces}</p>
                  <button onClick={() => alert("Booking this spot")}>Book Now</button>
                </div>
              </Popup>
            </Marker>
          ))
        ) : (
          <p>No parking spots available.</p> // Handle empty or invalid data
        )}
      </MapContainer>
    </div>
  );
};

export default ParkingSearchPage;                                                                                                                     parkingsaerch-topic                                                                                                                                            // import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserLoginPage from "./components/User/LoginPage";
// import ParkingSearchPage from "./components/User/ParkingSearchPage";
// import OwnerLoginPage from "./components/Owner/OwnerLoginPage";
// import AddParkingPage from "./components/Owner/AddParkingPage";
// import LoginPage from "./components/User/LoginPage";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Navbar name="parking"/>
//       <Switch>
//         <Route path="/user/login" components={UserLoginPage} />
//         <Route path="/user/parking" components={ParkingSearchPage} />
//         <Route path="/owner/login" components={OwnerLoginPage} />
//         <Route path="/owner/add-parking" components={AddParkingPage} />
//       </Switch>
//     </Router>
   
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Update here: Switch -> Routes
import UserLoginPage from "./components/User/LoginPage";
import ParkingSearchPage from "./components/User/ParkingSearchPage";
import OwnerLoginPage from "./components/Owner/OwnerLoginPage";
import AddParkingPage from "./components/Owner/AddParkingPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar name="parking"  />
      <Routes> {/* Update here: Switch -> Routes */}
        <Route path="/user/login" element={<UserLoginPage />} />  {/* Update here: components -> element */}
        <Route path="/user/parking" element={<ParkingSearchPage />} /> {/* Update here: components -> element */}
        <Route path="/owner/login" element={<OwnerLoginPage />} />  {/* Update here: components -> element */}
        <Route path="/owner/add-parking" element={<AddParkingPage />} />  {/* Update here: components -> element */}
      </Routes>  {/* Update here: Switch -> Routes */}
    </Router>
  );
}

export default App;                                                                                                                                               #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}                                                                                                                                                                            app,js-topic                                                                                                                                                       according to the files sort the code and give all codes in arranged sequential manner and also writ the heading of that file 
