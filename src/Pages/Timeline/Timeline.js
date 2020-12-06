import Project1Schema from '../../IMG/Project1Schema.png';
import './Timeline.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Interro from '../../IMG/interro.png';
import DevIcon from "devicon-react-svg";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CallReceived, Directions, Widgets } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '65%',
    height: 'auto',
  },
}));


function Timeline() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:1000px)');

  const classes = useStyles();


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



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
        LastLine: "En recherche de stage",
        Project1ModalTitle: "Application mobile en React Native",
        Project1ModalDesc: "Outils utilisés sur ce projet :\n > React Native\n > NodeJS\n > MongoDB\n > ExpressJS\n ",
        Project1ModalLink: "Lien vers la video de presentation de l'application"
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
        LastLine: "Looking for an internship",
        Project1ModalTitle: "Mobile Application in React Native",
        Project1ModalDesc: "Tools used in this project :\n > React Native\n > NodeJS\n > MongoDB\n > ExpressJS\n ",
        Project1ModalLink: "Link to presentation video"
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
          date="2016"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Bac}</h3>
          <h4 className="vertical-timeline-element-subtitle">{languageDictionary.BacSub}</h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - Present"
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
          icon={<DevIcon icon="react" style={{ fill: "White" }} />}
        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Project1}</h3>
          <p>
            {languageDictionary.Project1Sub}
            <Button onClick={handleOpen} variant="contained">Presentation</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">
                    {languageDictionary.Project1ModalTitle}
                  </h2>
                  <img src={Project1Schema} width="100%" alt="" />
                  <a href="https://www.youtube.com/watch?v=KqZxbWqqODw">{languageDictionary.Project1ModalLink}</a>
                  <pre id="transition-modal-description">{languageDictionary.Project1ModalDesc}</pre>
                </div>
              </Fade>
            </Modal>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DevIcon icon="terminal_badge" style={{ fill: "White" }} />}
        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.LastLine}</h3>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
