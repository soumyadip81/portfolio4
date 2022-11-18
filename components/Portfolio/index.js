import './index.css'
import Sidebar from '../Sidebar/'
import './index.css'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'

import Euchre from '../../assets/euchre.png'
import SQL from '../../assets/SQL-Clone.png'
import image from '../../assets/image-processing.png'
import piazza from '../../assets/piazza.png'
import asteroid from '../../assets/asteroid.png'
import itunes from '../../assets/itunes.png'
import starwars from '../../assets/starwars.png'
import treasure from '../../assets/treasure.png'
import numbers from '../../assets/numbers.png'

const Portfolio = () => {
  const [selectedPageStyle, setSelectedPageStyle] = useState("darkPortfolio");
  //used to selecet type of icon
  const [selected, setSelected] = useState(true);
  const [sideBarStyle, setSideBarStyle] = useState("navContainerDark");

  function changePageStyle(){
    if(selectedPageStyle === 'darkPortfolio'){
      setSelectedPageStyle('lightPortfolio');
      setSelected(false);
      setSideBarStyle("navContainerLight");
    }
    else if(selectedPageStyle === 'lightPortfolio'){
      setSelectedPageStyle('darkPortfolio');
      setSelected(true);
      setSideBarStyle("navContainerDark");
    }

  }
  
    return (
      <div className="App">
      <Sidebar currPage = "Portfolio" sideBarTheme = {sideBarStyle}/>
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
              <p> Projects</p>

            <div className = "project1">
                <img src = {Euchre} alt = "euchre"/>
            </div>
            <div className = "project2">
                <img src = {SQL} alt = "euchre"/>
            </div>
            <div className = "project3">
                <img src = {image} alt = "euchre"/>
            </div>
            <div className = "project4">
                <img src = {piazza} alt = "euchre"/>
            </div>
            <div className = "project5">
                <img src = {asteroid} alt = "euchre"/>
            </div>
            <div className = "project6">
                <img src = {itunes} alt = "euchre"/>
            </div>
            <div className = "project7">
                <img src = {starwars} alt = "euchre"/>
            </div>
            <div className = "project8">
                <img src = {treasure} alt = "euchre"/>
            </div>
            <div className = "project9">
                <img src = {numbers} alt = "euchre"/>
            </div>
          </div>

          
        </div>
        
    )
  }
  
  export default Portfolio