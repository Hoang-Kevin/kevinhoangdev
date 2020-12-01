import './Contact.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import ReactTextTransition, { presets } from "react-text-transition";
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function Contact() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);


  useEffect(() => {
    setLanguage();
  }, [language]);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },

    },
  }));

  const classes = useStyles();

  const sendForm = () => {
    var data = {
      from_name: "FRANCK FRANCK",
      to_name: "FRANCK@LEDEUX.fr",
      message: "BONJOUR BONJOUR BONJOUR"
    }
    console.log("oiuj")
    emailjs.send('service_b9rq5v6', 'template_jo60n0s', data, 'user_0Eb2LbE8Jgm19DgzrzIzi')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });


  }


  const setLanguage = () => {
    if (language.currentLanguage == "fr") {
      setLanguageDictionary({
        Developer: "Développeur",
        FullStack: "Full-Stack"
      })
    }
    else {
      setLanguageDictionary({
        Developer: "Full-Stack",
        FullStack: "Developer"
      })
    }
  }

  return (
    <div className="Contact">
      <h2> Contact me!</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="ContactTextBox">
          <TextField required id="standard-basic" label="Nom" />
        </div>
        <div className="ContactTextBox">
          <TextField required id="filled-basic" label="Email" />
        </div>
        <div className="ContactTextBox">
          <TextField
            id="standard-full-width"
            label="Message"
            style={{ margin: 8 }}
            helperText="Full width!"
            fullWidth
            margin="normal"
          />
        </div>
      </form>
      <Button onClick={() => { sendForm() }}>sdrrflgsdkfj</Button>
    </div>
  );
}

export default Contact