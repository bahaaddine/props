import './App.css';
import './components/Navbar/Navbar.css';
import "./components/Description/Description.js"
import NavBar from './components/Navbar/NavBar'
import Description from './components/Description/Description' 
import Project from './components/Projects/Project'
import Contact from "./components/Contact/Contact.js"
import Footer from "./components/Footer/Footer.js"
import Proj1 from "./Assets/proj1.jpg"
import Proj2 from "./Assets/proj2.jpg"
import Proj3 from "./Assets/proj3.jpg"
import Proj4 from "./Assets/proj4.jpg"
import React, { PureComponent } from 'react'

function App() {
  return (
    <div className="App">
      <NavBar name="sniper"/>
      <Description name="msr baha-sniper-py">
          <img src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/267454734_1068022477362679_3014793168723238523_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3Rv07kGpm30AX-noUB3&_nc_ht=scontent.ftun15-1.fna&oh=00_AT_bEr67nCfL8nnE2Wa3gcGiQ8ydudtsOVZqxCDqeRGJeQ&oe=61C5A120" width="200" height="190"></img>
      </Description>
      <div className="proj">
      <Project  src={Proj1}
        title="Project 1"
        par="this is my first project" />
        <Project   src={Proj2}
        title="Project 2"
        par="this is my best project" />
        <Project  src={Proj3}
        title="Project 3"
        par="this is my hardest project" />
        <Project  src={Proj4}
        title="Project 4"
        par="this is my funnest project" />
        </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
