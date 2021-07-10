// import './App.css';
import Header from "./Header";

import Home from "./Home";
// import Moviecard from "./Moviecard"
import Movielist from "./Movielist"
import {BrowserRouter, Route} from 'react-router-dom'
import Moviedetail from "./Moviedetail";
import { useState } from "react";
import Favorites from "./Favorites";

function App() {
  // const [favorites, setfavorites] = useState([]);

  // const addfavorites=(movie)=>{
  //   const newfavorites = [movie,...favorites];
  //   setfavorites(newfavorites);
  // }
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello World!!</h1> */}
        <Header />
        {/* <Home /> */}
        {/* <Moviecard /> */}
        
        <div className="container">
        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" component={Movielist} />
        <Route path="/details" component={Moviedetail} />
        <Route path="/favorites" component={Favorites} />
         
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
