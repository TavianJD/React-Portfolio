import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./components/About/index"
import Nav from "./components/Nav/index"
import Footer from './components/footer/index'
import ProjectCard from './components/Projects/index'
import Contact from '../pages/Contact/'

function App() {


  return(
      <Router>
      <div>
        <Header></Header>
        {/* <About></About> */}
        {/* <ContactForm></ContactForm> */}
        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/projects" component={ProjectCard} />
          <Route exact path="/resume" component={Resume} />
        </div>
        <Footer></Footer>
      </div>
      </Router>
    );
}

export default App;
