import './Contact.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import ReactTextTransition, { presets } from "react-text-transition";

function Contact(){
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);

  useEffect(() => {
    setLanguage();
  }, [language]);

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
          <form>
              <label>
                  Object:
                  <input type="text" value=""/>
              </label>
              <label>
                  Mail:
                  <input type="Mail" value=""/>
              </label>
              <label>
                  Message:
                  <textarea type="text"/>
              </label>
              <input type="submit" value="Envoyer"/>
          </form>
      </div>
  );
}

export default Contact