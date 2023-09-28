import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RawPost from "./components/RawPost/RawPost";
import NetflixClone from "./components/Search/search";
import {Originals,action,horrorMovies,romanceMovies,Documentaries,comedyMovies} from './urls'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <NetflixClone/>
        <Banner/>
        <RawPost url={Originals } title='Netflix Originals' />
        <RawPost url={action} title='Actions' isSmall/>
        <RawPost url={comedyMovies} title='Comedy Movies' isSmall/>
        <RawPost url={romanceMovies} title='Romance Movies' isSmall/>
        <RawPost url={horrorMovies} title='Horror Movies' isSmall/>
        <RawPost url={Documentaries} title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
