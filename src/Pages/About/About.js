import logo from '../../logo.svg';
import './About.css';
import Hexagon from '../../IMG/Hexagon.png';
import Zoom from 'react-reveal/Zoom';

function About() {
  return (
    <div className="About">
        <div className="About-header">
          <p>About</p>
        </div>
        <div className="Main-Asset">
          <div className="HexagonParent">
            <div className="Hexagon1">
              <img src={Hexagon}/>
            </div>
            <div className="Hexagon1">
              <img src={Hexagon}/>
            </div>
          </div>
          <div className="HexagonParent">
            <div className="Hexagon1">
              <img src={Hexagon}/>
            </div>
            <div className="Hexagon1">
              <img src={Hexagon}/>
            </div>
          </div>
        </div>
        <div className="Content">
          <div className="Profil">
            <p>Profil</p>
          </div>
          <div className="SkillBars">
            <p>Skill</p>
          </div>
        </div>
    </div>
  );
}

export default About;
