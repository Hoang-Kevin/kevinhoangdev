import './Base.css';

import { useState, useEffect } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";
import Image from 'react-bootstrap/Image';
import Zoom from 'react-reveal/Zoom';
import Particles from 'react-particles-js';
import Sazuphoto from "../../IMG/IMG_1569.png"


function Base() {
  return (  
    <div>
      <div className="Base">
        <div className="Background">
          <Particles 
            width={window.width}
            height={window.height}
            params={{
                "particles": {
                  "number": {
                    "value": 50
                },
                "size": {
                  "value": 3
                }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                  }
                }
              }
            }}
          />
        </div>
        <div className="Foreground">
          <Zoom>
              <div className="Cadre">
                <img src={Sazuphoto} alt="SazuPhoto" className="SazuPhoto" />
              </div>
          </Zoom>
          <div className="KEHVIN">
            {`KEVIN HOANG`.split("").map((n, i) => (
                <ReactTextTransition
                  key={i}
                  text={n}
                  delay={i * 175}
                  className="big"
                  overflow
                  inline
                />
              ))
            }
            <div>
            {`Developpeur`.split("").map((n, i) => (
                <ReactTextTransition
                  key={i}
                  text={n}
                  delay={i * 175}
                  className="big"
                  overflow
                  inline
                />
              ))
            }
            </div>
            {`Full-Stack`.split("").map((n, i) => (
                <ReactTextTransition
                  key={i}
                  text={n}
                  delay={i * 175}
                  className="big"
                  overflow
                  inline
                />
              ))
            }
          </div>    
        </div>
      </div>
    </div>
  );
}

export default Base;
