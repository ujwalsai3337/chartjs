
import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Home from './components/Home';
import InputSec from './components/InputSec/index.js'
import { UserData } from "./Data";

import Chart from 'chart.js/auto';


const App = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Projects Sanctioned",
        data: UserData.map((data) => data.projectsSanctioned),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <Home/>
      <InputSec/>
      <div style={{ width: 700 }}>
        <Body chartData={userData} />
      </div>
      
    </>
    

    
  );
}


export default App;
