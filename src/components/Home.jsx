import React from 'react';
// import { render } from 'react-dom';

const Home = () => 
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-xs-12"></div>
            <div className="col-md-4 col-xs-12 text-center">
                <p></p>{/*  for the shitty space */}
                <img src="/homepage.png" alt="Sample img" width="300" height="300" /><p></p>
                <h3>Made with ❤ by  <a href="https://github.com/ngsanthosh" target="_blank" rel="noreferrer" style={{textDecoration:'none'}} >Santhosh</a> </h3>
                <p>Powered by React.</p>
            </div>
        <div className="col-md-4 col-xs-12"></div>
    </div></div>
    


export default Home;