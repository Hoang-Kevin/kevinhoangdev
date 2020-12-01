import logo from '../../logo.svg';
import './Timeline.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        BacSub: "Sacré-coeur Tourcoing",
        Cesi: "CESI École d'ingénieurs",
        CesiSub: "Méthodologie Problem-based learning, où l'évaluation finale est un projet fait en équipe",
        Project1: "",
        Project1Sub: "",
      })
    }
    else {
      setLanguageDictionary({
        Bac: "Baccalaureate of Science",
        BacSub: "Developer",
        Cesi: "CESI Engineering school",
        CesiSub: "Engineering school using PBL methodology, where final exams are real projects done in a team",
        Project1: "",
        Project1Sub: "",
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
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
    </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
