import './index.css'
import { useState, useEffect } from 'react'
import Logo from '../../assets/S-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faPerson,
  faTrophy,
  faEye,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {
 // const [showNav, setShowNav] = useState(false);
  const [selectedPage, setSelectedPage] = useState("home-link");
  const [homeStyle, setHomeStyle] = useState("selected");
  const [aboutStyle, setAboutStyle] = useState("notSelected");
  const [skillStyle, setSkillStyle] = useState("notSelected");
  const [portfolioStyle, setPortfolioStyle] = useState("notSelected");
  const [contactStyle, setContactStyle] = useState("notSelected");
  //console.log('props value is ' + props.sideBarDark);
  //current props are currPage, sideBarTheme
  useEffect(() => {    
    //console.log('side bar style is' + sideBarStyle);

   // set selected icon
   if(props.currPage === 'Home'){
    setHomeStyle("selected");
    setAboutStyle("notSelected");
    setSkillStyle("notSelected");
    setPortfolioStyle("notSelected");
    setContactStyle("notSelected");

  }
  else if(props.currPage === 'About'){
    setHomeStyle("notSelected");
    setAboutStyle("selected");
    setSkillStyle("notSelected");
    setPortfolioStyle("notSelected");
    setContactStyle("notSelected");

  }
  else if(props.currPage === 'Skill'){
    setHomeStyle("notSelected");
    setAboutStyle("notSelected");
    setSkillStyle("selected");
    setPortfolioStyle("notSelected");
    setContactStyle("notSelected");

  }
  else if(props.currPage === 'Portfolio'){
    setHomeStyle("notSelected");
    setAboutStyle("notSelected");
    setSkillStyle("notSelected");
    setPortfolioStyle("selected");
    setContactStyle("notSelected");

  }
  else if(props.currPage === 'Contact'){
    setHomeStyle("notSelected");
    setAboutStyle("notSelected");
    setSkillStyle("notSelected");
    setPortfolioStyle("notSelected");
    setContactStyle("selected");

  }

     
  }, [props.currPage, selectedPage]);

  
  
    return (
      <div className= {props.sideBarTheme}>

        <div className = "me">
          <img src = {Logo} alt = "Logo with initial S"/>
          {props.sideBarTheme === 'navContainerDark'
          ? <h1 className = 'pDark'> Soumyadip</h1>
          : <h1 className = 'pLight'> Soumyadip</h1>}
          

        </div>

        <div className = 'icons'>
          <NavLink 
          to = "/"
          aria-label="link to home page"
          activeclassname="active"
          className = {homeStyle}
          id = "home-link"
          onClick={() =>  setSelectedPage("home-link")
        }
          >
            <FontAwesomeIcon className = "fa-2x" icon={faHome} color="#4d4d4e" />
          </NavLink>
        
        
          <NavLink 
          to = "/about"
          aria-label="link to about page"
          activeclassname="active"
          id = "about-link"
          className= {aboutStyle}
          onClick={() =>  setSelectedPage("about-link")}>
            <FontAwesomeIcon className = "fa-2x" icon={faPerson} color="#4d4d4e" />
          </NavLink>
          {/*
          <NavLink 
          to = '/skill'
          activeclassname="active"
          className = {skillStyle}
          id = "skill-link"
          onClick={() =>  setSelectedPage("skill-link")}>
            <FontAwesomeIcon className = "fa-2x" icon={faTrophy} color="#4d4d4e" />
         </NavLink>*/}

          <NavLink 
          to = '/portfolio'
          aria-label="link to portfolio page"
          activeclassname="active"
          className = {portfolioStyle}
          id = "portfolio-link"
          onClick={() =>  setSelectedPage("portfolio-link")}>
            <FontAwesomeIcon className = "fa-2x" icon={faEye} color="#4d4d4e" />
          </NavLink>

          <NavLink 
          to = "/contact"
          aria-label="link to contact page"
          activeclassname="active"
          className = {contactStyle}
          id = "contact-link"
          onClick={() =>  setSelectedPage("contact-link")}>
            <FontAwesomeIcon className = "fa-2x" icon={faMailBulk} color="#4d4d4e" />
          </NavLink>

        </div>

        <div className = 'socialMediaIcons'>
          <a href = "https://www.linkedin.com/in/soumyadip-nandi-966042207"
          aria-label="link to linkedIn page">
          <FontAwesomeIcon className = "fa-2x" icon={faLinkedin} color="#4d4d4e" />
          </a>

          <a href = "https://github.com/soumyadip81"
          aria-label="link to github page">
          <FontAwesomeIcon  className = "fa-2x" icon={faGithub} color="#4d4d4e" />
          </a>


          

        </div>

        
        
        
       
      </div>
      
    )

    
  }
  
  export default Sidebar