import './index.css'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import cPlusPic from '../../assets/C++.png'
import cPic from '../../assets/C.png'
import reactJs from '../../assets/reactJs.png'
import vueJs from '../../assets/vueJs.png'
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/typescript.png'
import Salesforce from '../../assets/salesforce.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';



import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Sidebar from '../Sidebar/'
const About = () => {
  const [selectedPageStyle, setSelectedPageStyle] = useState("darkAbout");
  //used to selecet type of icon
  const [selected, setSelected] = useState(true);
  const [sideBarStyle, setSideBarStyle] = useState("navContainerDark");

  function changePageStyle(){
    if(selectedPageStyle === 'darkAbout'){
      setSelectedPageStyle('lightAbout');
      setSelected(false);
      setSideBarStyle("navContainerLight");
    }
    else if(selectedPageStyle === 'lightAbout'){
      setSelectedPageStyle('darkAbout');
      setSelected(true);
      setSideBarStyle("navContainerDark");
    }

  }
  
    return (
      <div className="App">
      <Sidebar currPage = "About" sideBarTheme = {sideBarStyle}/>
     
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


         <div className = "myDetails">
          <h1> About Me</h1>
         </div>

         <div className = "info1">
          <h2> I'm Soumyadip Nandi : A Software Engineer </h2>
          <h3>Further details about Me</h3>
         </div>

         <div className = "info2">
          <h3> Contact Section & Professional Section</h3>
         </div>

         <div className = "info3">
          <h3> Professional Experiences</h3>
         </div>

         

         <div className = "codingLanguages">
          <h3>Languages and Frameworks</h3>
         </div>

         <div className = "codingLanguages1">
          <img src = {cPlusPic} alt = "bootstrap img"/>
         </div>

         <div className = "codingLanguages2">
          <img src = {cPic} alt = "c img"/>
         </div>

         <div className = "codingLanguages3">
          <img src = {reactJs} alt = "c img"/>
         </div>

         <div className = "codingLanguages4">
          <img src = {vueJs} alt = "c img"/>
         </div>

         <div className = "codingLanguages5">
          <img src = {javascript} alt = "c img"/>
         </div>

         <div className = "codingLanguages6">
          <img src = {typescript} alt = "c img"/>
         </div>

         <div className = "codingLanguages7">
          <img src = {Salesforce} alt = "c img"/>
         </div>

         <div className = "codingLanguages8">
          <img src = {html} alt = "c img"/>
         </div>

         <div className = "codingLanguages9">
          <img src = {css} alt = "c img"/>
         </div>

         <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Bank of America - Software Engineering Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Charlotte, NC
            </h4>
            <p>Developed features on identifying customer needs and managed the loan underwriting process using the Salesforce platform and nCino banking operating system.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Rakuten - Software Engineering Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tokyo, Japan
            </h4>
            <p>Implemented features on listing hotel plans and applying discount coupons for local and global currencies in the supplier side travel website using React.js, TypeScript, and Redux.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Hiroshima University BMK - Augmented Reality Development Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tokyo, Japan
            </h4>
            <p>Developed augmented reality program that displays a filter of an EEG headset to demonstrate its ideal coordinate position on the user’s face for optimal accuracy in reading data.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Daimler Trucks Asia - e-Mobility Project Management Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kanagawa, Japan
            </h4>
            <p>
            Restructured and automated parts tracking database with over 1000 parts, enhancing tracking efficiency by 15%.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>

           
          

          

        
      

      </div>
      
    </div>
    )
  }
  
  export default About