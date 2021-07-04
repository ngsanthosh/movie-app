// import './App.css';
import Header from "./Header";
import Home from "./Home";
// import Moviecard from "./Moviecard"
import Movielist from "./Movielist"
import {BrowserRouter, Route} from 'react-router-dom'
import Moviedetail from "./Moviedetail";

function App() {
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
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
