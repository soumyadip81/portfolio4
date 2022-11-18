
import './index.css'
import Loader from 'react-loaders'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/'


import Resume from '../../assets/Soumyadip_Nandi_Resume.pdf'
import profilePic from '../../assets/profile.png'


const Layout = (e) => {
  const [selectedPageStyle, setSelectedPageStyle] = useState("darkLayout");
  //used to selecet type of icon
  const [selected, setSelected] = useState(true);
  const [sideBarStyle, setSideBarStyle] = useState("navContainerDark");

  function changePageStyle(){
    if(selectedPageStyle === 'darkLayout'){
      setSelectedPageStyle('lightLayout');
      setSelected(false);
      setSideBarStyle("navContainerLight");
    }
    else if(selectedPageStyle === 'lightLayout'){
      setSelectedPageStyle('darkLayout');
      setSelected(true);
      setSideBarStyle("navContainerDark");
    }

  }
  return (
    <div className="App">
      <Sidebar currPage = "Home" sideBarTheme = {sideBarStyle}/>

     
      <div className={selectedPageStyle}>
        <a href="#main" class="skip-to-main-content-link">Skip to main content</a>
        {selected
        ?
        <div className = "icon">
          <FontAwesomeIcon  className = "fa-2x" icon={faMoon} color="#4d4d4e" onClick={() => changePageStyle()}/>
         </div>
        :
         <div className = "icon">
          <FontAwesomeIcon  className = "fa-2x" icon={faSun} color="#4d4d4e" onClick={() => changePageStyle()}/>
         </div>}

         
          <div className = {selected ? 'pageContent1Dark' : 'pageContent1Light'}>
            <h2> Hi, I'm <i>Soumyadip Nandi</i></h2>
            <h3> I'm a junior at the University of Michigan, majoring in computer science</h3>
            <h4> Background: </h4>
            <h5> Salesforce Coding / Web-Development in TypeScript, React, and Redux / AR Development /</h5>
            <h5>e-mobility Project Management </h5>
            
              <a
                className="button"
                href={Resume}
                download
                >
                Download Resume
              </a>
            
          </div>

          

        <div className = "pageContent2">
          <img src = {profilePic} alt = "Logo with initial S"/>
        </div>
      

      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Layout