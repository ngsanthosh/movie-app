// import './App.css';
import Header from "./Header";
import Home from "./Home";
import Moviecard from "./Moviecard"
import Movielist from "./Movielist"
import {BrowserRouter, Route} from 'react-router-dom'

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
        <Route path="/movies/" exact={false} component={Movielist} />
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
