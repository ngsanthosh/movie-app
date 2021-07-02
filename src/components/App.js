// import './App.css';
import Header from "./Header";
import Home from "./Home";
import Moviecard from "./Moviecard"
import Movielist from "./Movielist"

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!!</h1> */}
      <Header />
      {/* <Home /> */}
      {/* <Moviecard /> */}
      <div className="container">
        <Movielist />
      </div>
    </div>
  );
}

export default App;
