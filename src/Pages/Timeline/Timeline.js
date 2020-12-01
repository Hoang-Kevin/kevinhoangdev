import logo from '../../logo.svg';
import './Timeline.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Interro from '../../IMG/interro.png'
import DevIcon from "devicon-react-svg"

function Timeline() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);

  useEffect(() => {
    setLanguage();
  }, [language]);


  const setLanguage = () => {
    if (language.currentLanguage == "fr") {
      setLanguageDictionary({
        Bac: "Baccalauréat Scientifique",
        BacSub: "Lycée Sacré-coeur Tourcoing, FRANCE",
        Cesi: "CESI École d'ingénieurs",
        CesiSub: "Méthodologie Problem-based learning, où l'évaluation finale est un projet fait en équipe",
        Project1: "Application mobile React Native",
        Project1Sub: "Projet d'application mobile pour la gestion de lavage de masque en tissu ainsi que d'autres fonctionnalités aidant pendant la crise sanitaire. L'application utilise les technologies React Native, MongoDB, Expo, NodeJS",
      })
    }
    else {
      setLanguageDictionary({
        Bac: "Baccalaureate of Science",
        BacSub: "Sacré-coeur High-School Tourcoing, FRANCE",
        Cesi: "CESI Engineering school",
        CesiSub: "Engineering school using PBL methodology, where final exams are real projects done in a team",
        Project1: "Mobile App in React Native",
        Project1Sub: "Mobile App helping counting the number of washes for the masks made of fabric during the outbreak. The application uses React Native, MongoDB, Expo and NodeJS",
      })
    }
  }

  return (
    <div className="Base">
      <div>
        <h2>
          Experiences
        </h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2016 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Bac}</h3>
          <h4 className="vertical-timeline-element-subtitle">{languageDictionary.BacSub}</h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Cesi}</h3>
          <h4 className="vertical-timeline-element-subtitle">Lille, FRANCE</h4>
          <p>
            {languageDictionary.CesiSub}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DevIcon icon="react" style={{fill:"White"}}/>}
        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Project1}</h3>
          <p>
            {languageDictionary.Project1Sub}
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DevIcon icon="terminal_badge" style={{fill:"White"}}/>}
        >
          <h3 className="vertical-timeline-element-title">En recherche de stage</h3>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
