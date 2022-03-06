import React, {useState} from "react";

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About/index"
import Header from "./components/Header/index"
import Footer from './components/footer/index'
import ProjectCard from './components/Projects/index'
import Contact from './pages/Contact/index'
import Resume from './pages/Resume/index'

function App() {

  const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // switch statement that will return the appropriate component of the 'currentPage'
        switch(currentPage) {
          case "about": 
          return <About></About>
          case "contact": 
          return <Contact></Contact>
          case "portfolio":
          return  <ProjectCard></ProjectCard>
          case "resume": 
          return <Resume></Resume>
          default:
            return <About></About>
        }
       
    };

return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
