import React from 'react';
import { Link } from 'react-router-dom';
// import About from '../About';

function Navigation () {
 

    return (
        <header>
          <nav>
            <ul className='header'>
              <li>
                <Link to={'/'}>About</Link>
              </li>
              <li>
                <Link to={'Contact'}>Contact</Link>
              </li>
              <li>
                <Link to={'Portfolio'}>Portfolio</Link>
              </li>
              <li>
                <Link to={'Resume'}>Resume</Link>
              </li>
            </ul>
          </nav>
          <h1 className='my-name'> 
           Ronya Gettis   
          </h1>
        </header>
      )
}

export default Navigation;




// return (
    //     <ul className="nav">
    //       {tabs.map(tab => (
    //         <li className="nav-item" key={tab}>
    //           <a
    //             href={'#' + tab.toLowerCase()}
    //             onClick={() => props.handlePageChange(tab)}
    //             className={
    //               props.currentPage === tab ? 'nav-link active' : 'nav-link'
    //             }
    //           >
    //             {tab}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   );